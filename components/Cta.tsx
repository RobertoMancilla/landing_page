// Cta.tsx y
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";

export function CTA() {
  return (
    <Section py="sm" className="bg-brand-gray-100">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
          ¿Necesitas una cotización personalizada?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Nuestro equipo técnico está listo para desarrollar la aleación
          perfecta para tu proyecto e industria.
        </p>
        <div className="flex justify-center">
          <Button variant="default" size="lg">
            Agenda una visita
          </Button>
        </div>
      </div>
    </Section>
  );
}
