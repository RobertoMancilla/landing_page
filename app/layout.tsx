// layout.tsx
import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aludeox - Especialistas en Aleaciones Industriales",
  description:
    "Empresa líder en aleaciones metálicas con certificación ISO. Soluciones personalizadas para tu industria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className="antialiased">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
