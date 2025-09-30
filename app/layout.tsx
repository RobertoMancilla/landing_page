// layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aludeox - Especialistas en Aleaciones Industriales",
  description:
    "Empresa líder en aleaciones metálicas con certificación ISO. Soluciones personalizadas para tu industria.",
  icons: {
    icon: "/images/logos/icon.png",
    shortcut: "/images/logos/icon.png",
    apple: "/images/logos/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className="antialiased">
      <head>
        <link
          rel="preload"
          href="/videos/animated_logo.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
