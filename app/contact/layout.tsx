import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - ALUDEOX",
  description:
    "Contáctanos para cotizaciones personalizadas, asesoría técnica y soluciones en aleaciones de aluminio y cobre. Nuestro equipo está listo para ayudarte.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
