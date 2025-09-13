import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Zap, Cog, Shield, Wrench } from "lucide-react";

const specialties = [
  {
    icon: Zap,
    title: "Aleaciones de Aluminio",
    description:
      "Aleaciones ligeras y resistentes para aplicaciones aeroespaciales, automotrices y de construcción con excelente resistencia a la corrosión.",
  },
  {
    icon: Cog,
    title: "Aleaciones de Cobre",
    description:
      "Soluciones conductivas de alta calidad para aplicaciones eléctricas, electrónicas y sistemas de intercambio térmico industrial.",
  },
  {
    icon: Shield,
    title: "Reciclaje de Metales",
    description:
      "Aceros aleados de alta resistencia para aplicaciones estructurales, herramientas industriales y componentes de maquinaria pesada.",
  },
  {
    icon: Wrench,
    title: "Control de Calidad",
    description:
      "Desarrollo de aleaciones específicas según las necesidades técnicas de tu proyecto, con análisis metalúrgico completo.",
  },
];

export function Specialties() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Nuestras especialidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contamos con más de 20 años de experiencia desarrollando aleaciones
            metálicas de alta calidad para diversas industrias, con
            certificación ISO y procesos de control de calidad rigurosos.
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
      </div>
    </section>
  );
}
