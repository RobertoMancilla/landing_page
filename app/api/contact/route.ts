// app/api/contact/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";            // Vercel: Node.js runtime
export const dynamic = "force-dynamic";     // evitar cache estática de rutas

function isValid(body: any) {
  const { name, email, message, subject } = body || {};
  const emailOk = typeof email === "string" && /\S+@\S+\.\S+/.test(email);
  return (
    typeof name === "string" && name.trim().length >= 2 &&
    emailOk &&
    typeof message === "string" && message.trim().length >= 10 &&
    typeof subject === "string" && subject.trim().length >= 3
  );
}

function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  const preview = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
  return explicit || preview || "http://localhost:3000";
}

// Lee JSON con límite de tamaño (evita payloads enormes)
async function readJsonWithLimit(req: Request, limitBytes = 50_000) {
  const len = Number(req.headers.get("content-length") || 0);
  if (len && len > limitBytes) throw new Error("Payload too large");
  const text = await req.text();
  if (text.length > limitBytes) throw new Error("Payload too large");
  return JSON.parse(text || "{}");
}

export async function POST(req: Request) {
  try {
    // Acepta sólo JSON
    const ct = req.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      return NextResponse.json({ ok: false, error: "Content-Type inválido" }, { status: 415 });
    }

    const body = await readJsonWithLimit(req, 50_000);

    // Honeypot anti-bot (campo oculto)
    if (typeof body?.botcheck === "string" && body.botcheck.trim() !== "") {
      return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
    }

    if (!isValid(body)) {
      return NextResponse.json(
        { ok: false, error: "Datos inválidos" },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

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
    let data: any = null;

    for (let i = 0; i < 2; i++) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        data = await res.json().catch(() => ({}));
        ok = !!(res.ok && data?.success);
        if (ok) break;
      } catch {
        // intenta de nuevo una vez
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
  } catch (e: any) {
    const msg = e?.message === "Payload too large" ? "Payload demasiado grande" : "Error del servidor";
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
