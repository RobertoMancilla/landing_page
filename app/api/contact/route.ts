// app/api/contact/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";            // Vercel: Node.js runtime
export const dynamic = "force-dynamic";     // evitar cache estática de rutas

// ------- Tipos -------
type ContactBody = {
  name: string;
  email: string;
  message: string;
  subject: string;
  company?: string;
  phone?: string;
  botcheck?: string;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  [k: string]: unknown;
};

// ------- Validación y helpers -------
function isContactBody(x: unknown): x is ContactBody {
  if (typeof x !== "object" || x === null) return false;
  const b = x as Record<string, unknown>;
  const nameOk = typeof b.name === "string" && b.name.trim().length >= 2;
  const emailOk = typeof b.email === "string" && /\S+@\S+\.\S+/.test(b.email);
  const msgOk = typeof b.message === "string" && b.message.trim().length >= 10;
  const subjOk = typeof b.subject === "string" && b.subject.trim().length >= 3;
  return nameOk && emailOk && msgOk && subjOk;
}

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL; // ej. https://landing-page...
  const preview = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
  return explicit || preview || "http://localhost:3000";
}

// Lee JSON con límite de tamaño (evita payloads enormes)
async function readJsonWithLimit(req: Request, limitBytes = 50_000): Promise<unknown> {
  const len = Number(req.headers.get("content-length") || 0);
  if (len && len > limitBytes) throw new Error("Payload too large");
  const text = await req.text();
  if (text.length > limitBytes) throw new Error("Payload too large");
  return text ? JSON.parse(text) : {};
}

// ------- Handlers -------
export async function POST(req: Request) {
  try {
    // Acepta sólo JSON
    const ct = req.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      return NextResponse.json({ ok: false, error: "Content-Type inválido" }, { status: 415 });
    }

    const parsed = await readJsonWithLimit(req, 50_000);
    // Honeypot anti-bot (campo oculto)
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      typeof (parsed as Record<string, unknown>).botcheck === "string" &&
      ((parsed as Record<string, unknown>).botcheck as string).trim() !== ""
    ) {
      return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
    }

    if (!isContactBody(parsed)) {
      return NextResponse.json(
        { ok: false, error: "Datos inválidos" },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }
    const body: ContactBody = parsed;

    // CSRF estricto: same-origin por Origin/Referer + Sec-Fetch-Site
    const siteUrl = getSiteUrl();
    const allowedHost = new URL(siteUrl).host;
    const origin = req.headers.get("origin") || "";
    const referer = req.headers.get("referer") || "";
    const sfs = req.headers.get("sec-fetch-site") || ""; // "same-origin" esperado

    const originHost = (() => { try { return new URL(origin).host } catch { return "" } })();
    const refererHost = (() => { try { return new URL(referer).host } catch { return "" } })();

    if (
      allowedHost && (
        (sfs && sfs !== "same-origin") ||
        ((originHost && originHost !== allowedHost) && (refererHost && refererHost !== allowedHost))
      )
    ) {
      return NextResponse.json(
        { ok: false, error: "Origen no permitido" },
        { status: 403, headers: { "Cache-Control": "no-store" } }
      );
    }

    const access_key = process.env.WEB3FORMS_ACCESS_KEY;
    if (!access_key) {
      return NextResponse.json(
        { ok: false, error: "Falta configuración del servidor" },
        { status: 500, headers: { "Cache-Control": "no-store" } }
      );
    }

    const payload = {
      access_key,
      subject: `[ALUDEOX] ${body.subject}`,
      from_name: "ALUDEOX Landing",
      name: body.name,
      email: body.email,
      message: body.message,
      company: body.company || "",
      phone: body.phone || "",
      reply_to: body.email,
      site: siteUrl,
    };

    // Timeout + retry sencillo al endpoint externo
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 10_000);

    let ok = false;
    let data: Web3FormsResponse | null = null;

    for (let i = 0; i < 2; i++) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        // intenta parsear JSON; si falla, será {}
        data = (await res.json().catch(() => ({}))) as Web3FormsResponse;
        ok = !!(res.ok && data?.success);
        if (ok) break;
      } catch {
        // retry loop
      }
    }
    clearTimeout(t);

    if (!ok) {
      console.error("Web3Forms error:", data);
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch (e: unknown) {
    const msg =
      e instanceof Error && e.message === "Payload too large"
        ? "Payload demasiado grande"
        : "Error del servidor";
    console.error(e);
    return NextResponse.json(
      { ok: false, error: msg },
      { status: msg.includes("grande") ? 413 : 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

// CORS/preflight opcional
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Cache-Control": "no-store",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
