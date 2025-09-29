import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FeatureIcons } from "@/components/root/FeatureIcons";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export function Hero() {
  return (
    <Section py="xs">
      {/* Logo animado centrado arriba y mucho más grande */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-2xl h-32 md:max-w-4xl md:h-40 lg:max-w-5xl lg:h-48 xl:max-w-6xl xl:h-56">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            aria-label="Logo animado de la empresa"
          >
            <source src="/videos/animated_logo.webm" type="video/webm" />
            <source src="/videos/animated_logo_fixed.mp4" type="video/mp4" />
            {/* Fallback final para browsers que no soportan video */}
            <Image
              src="/images/logos/secondary_logo.png"
              alt="main logo business"
              fill
              className="object-contain"
              priority
            />
          </video>
        </div>
      </div>

      {/* Contenido principal centrado */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-foreground leading-snug">
              Fundición especializada en aluminio y cobre
            </h1>
            <p className="text-base md:text-lg lg:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Transformamos aluminio y cobre en soluciones metálicas de alto
              valor. Somos una empresa 100% mexicana, comprometida con la
              <span className="text-primary font-medium"> calidad</span>, la{" "}
              <span className="text-primary font-medium">innovación</span> y la{" "}
              <span className="text-primary font-medium">confianza</span> para
              cada uno de nuestros clientes.
            </p>
          </div>

          <div className="space-y-0">
            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Solicita tu cotización</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <FeatureIcons />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
