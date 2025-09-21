import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FeatureIcons } from "@/components/FeatureIcons";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export function Hero() {
  return (
    <Section py="sm">
      {/* items-stretch: iguala la altura de ambas columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        {/* LEFT */}
        <div className="flex flex-col justify-start">
          {/* max-w-xl: ancho común; aumentamos tamaño del logo */}
          <div className="space-y-6 max-w-xl">
            <div className="relative w-full h-20 md:h-24">
              {" "}
              {/* */}
              <Image
                src="/secondary_logo.png"
                alt="main logo business"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-snug text-balance">
                Fundición especializada en aluminio y cobre
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Transformamos aluminio y cobre en soluciones metálicas de alto
                valor. Somos una empresa 100% mexicana, comprometida con la
                calidad, la innovación y la confianza para cada uno de nuestros
                clientes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link href="/contact">Solicita tu cotización</Link>
              </Button>
              <Button variant="outline" size="lg">
                Descargar catálogo
              </Button>
            </div>

            <FeatureIcons />
          </div>
        </div>

        {/* RIGHT */}
        {/* 🔧 self-stretch para que esta celda iguale la altura de la izquierda */}
        <div className="relative flex self-stretch justify-center">
          {/* 
            🔧 w-[60%]: 60% del ancho de la columna
            🔧 h-full: toma toda la altura de la fila (gracias a items-stretch/self-stretch)
            🔧 max-h y min-h para que no quede diminuta ni gigantesca
          */}
          <div className="relative w-full h-full min-h-[400px]">
            <Image
              src="/images/photo.png"
              alt="Imagen de aleaciones metálicas"
              fill
              /* 🔧 object-cover + object-center: rellena completamente el contenedor */
              className="object-cover object-center rounded-md"
              sizes="(min-width:1024px) 60vw, 100vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
