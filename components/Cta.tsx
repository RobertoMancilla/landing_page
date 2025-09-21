// Cta.tsx y
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function CTA({
  title = "¿Necesitas una cotización personalizada?",
  description = "Nuestro equipo técnico está listo para desarrollar la aleación perfecta para tu proyecto e industria.",
  buttonText = "Agenda una visita",
}: CTAProps) {
  return (
    <Section py="sm" className="bg-brand-gray-100">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
          {title}
        </h2>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="flex justify-center">
          <Button variant="default" size="lg" asChild>
            <Link href="/contact">{buttonText}</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
