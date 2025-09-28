import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FeatureIcons } from "@/components/root/FeatureIcons";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export function Hero() {
  return (
    <Section py="xs">
      {/* Logo centrado arriba y más grande */}
      <div className="flex justify-center mb-3">
        <div className="relative w-80 h-24 md:w-96 md:h-32">
          <Image
            src="/images/secondary_logo.png"
            alt="main logo business"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Contenido principal en dos columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        {/* LEFT - Contenido de texto */}
        <div className="flex flex-col justify-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-snug text-balance">
                Fundición especializada en aluminio y cobre
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Transformamos aluminio y cobre en soluciones metálicas de alto
                valor. Somos una empresa 100% mexicana, comprometida con la
                <span className="text-primary font-medium"> calidad</span>, la{" "}
                <span className="text-primary font-medium">innovación</span> y
                la <span className="text-primary font-medium">confianza</span>{" "}
                para cada uno de nuestros clientes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link href="/contact">Solicita tu cotización</Link>
              </Button>
            </div>

            <FeatureIcons />
          </div>
        </div>

        {/* RIGHT - Imagen que iguala la altura del contenido izquierdo */}
        <div className="relative flex self-stretch justify-center">
          <div className="relative w-full h-full min-h-[400px]">
            <Image
              src="/images/photo.png"
              alt="Imagen de aleaciones metálicas"
              fill
              className="object-cover object-center rounded-md"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
