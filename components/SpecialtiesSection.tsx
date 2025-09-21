import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BrickWallShield, Layers, Recycle, MonitorCog } from "lucide-react";
import { Section } from "@/components/layout/Section";

const specialties = [
  {
    icon: BrickWallShield,
    title: "Aleaciones de Aluminio",
    description:
      "Aleaciones ligeras y resistentes para aplicaciones aeroespaciales, automotrices y de construcción con excelente resistencia a la corrosión.",
  },
  {
    icon: Layers,
    title: "Aleaciones de Cobre",
    description:
      "Soluciones conductivas de alta calidad para aplicaciones eléctricas, electrónicas y sistemas de intercambio térmico industrial.",
  },
  {
    icon: Recycle,
    title: "Reciclaje de Metales",
    description:
      "Aceros aleados de alta resistencia para aplicaciones estructurales, herramientas industriales y componentes de maquinaria pesada.",
  },
  {
    icon: MonitorCog,
    title: "Control de Calidad",
    description:
      "Desarrollo de aleaciones específicas según las necesidades técnicas de tu proyecto, con análisis metalúrgico completo.",
  },
];

export function Specialties() {
  return (
    <Section py="sm" className="bg-background">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
          Nuestras especialidades
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          En ALUDEOX nos especializamos en la fundición y transformación de
          aluminio y cobre, ofreciendo aleaciones y materiales de alta pureza
          para sectores como automotriz, siderúrgico y eléctrico. Convertimos el
          metal reciclado en soluciones confiables y eficientes que impulsan la
          industria
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialties.map((specialty, index) => {
          const Icon = specialty.icon;
          return (
            <Card key={index} className="h-full border-0 shadow-none">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{specialty.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {specialty.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
