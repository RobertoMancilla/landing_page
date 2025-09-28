import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/Header";
import { SiteFooter } from "@/components/FooterSection";
import { CTA } from "@/components/Cta";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/layout/Section";
import {
  Factory,
  Lightbulb,
  ShieldUser,
  Leaf,
  Target,
  Eye,
  Award,
  Cog,
  Users,
  FileText,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Acerca de Nosotros - ALUDEOX",
  description:
    "Conoce nuestra trayectoria, valores, misión, visión y certificaciones en la industria de aleaciones de aluminio y cobre.",
};

export default function AboutUsPage() {
  const timelineItems = [
    {
      number: "01",
      icon: Factory,
      title: "Origen con propósito",
      description:
        "ALUDEOX nació tras detectar la necesidad del aluminio como desoxidante en las acerías de México, convirtiendo la chatarra en soluciones de valor para la industria siderúrgica.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Pioneros en innovación",
      description:
        "Fuimos la primera planta en México en producir conos de aluminio y briquetas de bote molido, hoy reconocidos como productos insignia de nuestra empresa.",
    },
    {
      number: "03",
      icon: Cog,
      title: "Especialización técnica",
      description:
        "Nuestra dirección está respaldada por más de tres décadas de experiencia en metalurgia líquida, lo que nos diferencia y garantiza procesos confiables.",
    },
    {
      number: "04",
      icon: Users,
      title: "Confianza del mercado",
      description:
        "Desde nuestros inicios hemos trabajado con la industria siderúrgica, y hoy también abastecemos a sectores como el automotriz, motores de combustión interna y transmisiones.",
    },
    {
      number: "05",
      icon: Eye,
      title: "Visión hacia adelante",
      description:
        "Con más de 30 años de trayectoria, seguimos apostando por la innovación tecnológica y procesos verdes, buscando marcar un precedente en la industria de la fundición.",
    },
  ];

  const values = [
    {
      icon: ShieldUser,
      title: "Compromiso",
      description:
        "Buscamos siempre la mejora continua de nuestros procesos, ofreciendo calidad y un trato personalizado a cada cliente.",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description:
        "Adaptamos y desarrollamos tecnologías para optimizar procesos y generar soluciones más eficientes.",
    },
    {
      icon: Users,
      title: "Confianza",
      description:
        "Construimos relaciones sólidas con nuestros clientes mediante transparencia, servicio y excelencia.",
    },
    {
      icon: Leaf,
      title: "Sustentabilidad",
      description:
        "Damos nueva vida a metales reciclados, cuidando los recursos y el entorno.",
    },
  ];

  const certifications = [
    "ISO 9001:2015",
    // "ISO 14001:2015",
    // "OHSAS 18001:2007",
  ];

  const normatives = [
    "NOM-043-SEMARNAT-1993",
    "NOM-085-SEMARNAT-2011",
    // "NOM-052-SEMARNAT-2005",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <Section
          id="quienes-somos"
          ariaLabelledby="hero-title"
          py="sm"
          containerClassName="lg:px-10"
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h1
              id="hero-title"
              className="text-3xl lg:text-4xl font-bold text-foreground leading-snug text-balance"
            >
              Quiénes Somos
            </h1>
          </div>

          {/* Content with aligned image */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="col-span-12 md:col-span-6">
              <div className="space-y-3">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-justify">
                  En <span className="text-primary font-medium">ALUDEOX</span>{" "}
                  nos dedicamos a la fundición y transformación de aluminio y
                  cobre, elaborando{" "}
                  <span className="text-primary font-medium">aleaciones</span>{" "}
                  que impulsan el crecimiento de la industria. Ofrecemos
                  soluciones para los
                  <span className="text-primary font-medium">
                    {" "}
                    sectores automotriz y siderúrgico
                  </span>
                  , así como insumos de alta pureza para las{" "}
                  <span className="text-primary font-medium">
                    industrias eléctrica y electrónica
                  </span>
                  . Adaptamos la materia prima a las necesidades específicas de
                  cada cliente.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-justify">
                  Trabajamos con{" "}
                  <span className="text-primary font-medium">
                    aleaciones madre
                  </span>{" "}
                  ,{" "}
                  <span className="text-primary font-medium">
                    lingotes, conos, briquetas
                  </span>{" "}
                  y{" "}
                  <span className="text-primary font-medium">
                    cobre electrolítico
                  </span>
                  , lo que nos convierte en un aliado confiable para empresas
                  que requieren calidad, consistencia y eficiencia en sus
                  procesos metalúrgicos.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-justify">
                  Nuestra pasión está en dar valor al{" "}
                  <span className="text-primary font-medium">
                    metal reciclado
                  </span>
                  , transformándolo en nuevos productos que cumplen con{" "}
                  <span className="text-primary font-medium">
                    estándares internacionales
                  </span>{" "}
                  y fortalecen la cadena productiva de múltiples sectores.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                <Image
                  src="/images/photo.png"
                  alt="Instalaciones de ALUDEOX - Fundición y transformación de aleaciones metálicas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Timeline Section */}
        <Section
          id="trayectoria"
          ariaLabelledby="timeline-title"
          className="bg-background"
          py="sm"
        >
          <h2
            id="timeline-title"
            className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12"
          >
            Nuestra Trayectoria
          </h2>
          {/* Desktop Timeline - Compact Version */}
          <div className="hidden lg:block relative max-w-6xl mx-auto">
            {/* Central vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30 h-full"></div>

            <div className="space-y-4">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative">
                  {/* Central connector circle - smaller */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-white border-3 border-primary rounded-full p-2 shadow-md hover:scale-105 transition-transform duration-200">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  {/* Content card - alternating sides */}
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                    >
                      <div
                        className={`rounded-lg p-4 border border-border shadow-sm hover:shadow-md transition-shadow group ${
                          index % 2 === 1 ? "bg-white" : "text-white/90"
                        }`}
                        style={
                          index % 2 === 1
                            ? {}
                            : { backgroundColor: "var(--brand-gray-200)" }
                        }
                      >
                        {/* Content */}
                        <div
                          className={`${
                            index % 2 === 0 ? "text-left" : "text-right"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">
                              {item.number}
                            </span>
                            <h3
                              className={`text-base lg:text-lg font-bold transition-colors ${
                                index % 2 === 1
                                  ? "text-foreground group-hover:text-primary"
                                  : "text-white group-hover:text-white/80"
                              }`}
                            >
                              {item.title}
                            </h3>
                          </div>
                          <p
                            className={`text-base lg:text-lg leading-relaxed ${
                              index % 2 === 1
                                ? "text-muted-foreground"
                                : "text-white/90"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Tablet Timeline - Compact */}
          <div className="hidden md:block lg:hidden relative max-w-3xl mx-auto">
            <div className="absolute left-12 w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30 h-full"></div>

            <div className="space-y-3">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="bg-white border-2 border-primary rounded-full p-2 shadow-sm">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div
                      className={`rounded-lg p-4 border border-border shadow-sm ${
                        index % 2 === 1 ? "bg-white" : ""
                      }`}
                      style={
                        index % 2 === 1
                          ? {}
                          : { backgroundColor: "var(--brand-gray-200)" }
                      }
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs font-bold">
                          {item.number}
                        </span>
                        <h3
                          className={`text-base lg:text-lg font-bold ${
                            index % 2 === 1 ? "text-foreground" : "text-white"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p
                        className={`text-base lg:text-lg leading-relaxed ${
                          index % 2 === 1
                            ? "text-muted-foreground"
                            : "text-white/90"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
          {/* Mobile Timeline - Compact */}
          <div className="md:hidden space-y-2">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex gap-3">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs shadow-sm">
                    {item.number}
                  </div>
                  {index < timelineItems.length - 1 && (
                    <div className="w-0.5 bg-gradient-to-b from-primary to-primary/30 mt-2 flex-1 min-h-[20px]"></div>
                  )}
                </div>

                <div className="flex-1">
                  <div
                    className={`rounded-lg p-3 border border-border shadow-sm ${
                      index % 2 === 1 ? "bg-white" : ""
                    }`}
                    style={
                      index % 2 === 1
                        ? {}
                        : { backgroundColor: "var(--brand-gray-200)" }
                    }
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="h-4 w-4 text-primary" />
                      <h3
                        className={`font-bold text-base leading-tight ${
                          index % 2 === 1 ? "text-foreground" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p
                      className={`text-base leading-relaxed ${
                        index % 2 === 1
                          ? "text-muted-foreground"
                          : "text-white/90"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Values Section */}
        <Section id="valores" ariaLabelledby="values-title" py="sm">
          <h2
            id="values-title"
            className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12"
          >
            Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-none">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-base lg:text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Mission, Vision and Quality Policy */}
        <Section
          id="mision-vision-calidad"
          className="bg-background"
          maxW="7xl"
          py="sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Visión */}
            <Card
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: "var(--brand-gray-200)" }}
            >
              <CardContent className="p-4">
                {/* Header con ícono */}
                <div className="relative mb-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <Eye className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white">
                      Visión
                    </h2>
                  </div>
                </div>
                <p className="text-base text-white/90 leading-relaxed text-center">
                  Enfocarnos en los mercados que signifiquen un reto tecnológico
                  en procesos innovadores para las industrias de transformación,
                  metal-mecánica y en general, implementando nuevas tecnologías.
                </p>
              </CardContent>
            </Card>

            {/* Misión */}
            <Card
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: "var(--brand-gray-200)" }}
            >
              <CardContent className="p-4">
                {/* Header con ícono */}
                <div className="relative mb-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white">
                      Misión
                    </h2>
                  </div>
                </div>
                <p className="text-base text-white/90 leading-relaxed text-center">
                  Fabricar aleaciones metálicas con materiales primarios y
                  metales reciclados para las industrias siderúrgicas, del
                  aluminio, y en general. Adaptando tecnologías existentes a
                  nuestras necesidades e implementando sistemas para hacerlas
                  más eficientes, además de proporcionar a nuestros clientes
                  asistencia técnica para optimizar sus costos.
                </p>
              </CardContent>
            </Card>

            {/* Política de Calidad */}
            <Card
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: "var(--brand-gray-200)" }}
            >
              <CardContent className="p-4">
                {/* Header con ícono */}
                <div className="relative mb-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white">
                      Política de Calidad
                    </h2>
                  </div>
                </div>
                <p className="text-base text-white/90 leading-relaxed text-center">
                  ALUDEOX está comprometido con el cumplimiento de requisitos
                  legales y regulatorios aplicables, así como los requerimientos
                  de nuestros clientes tanto actuales como potenciales,
                  produciendo y comercializando aleaciones metálicas con
                  materiales primarios y materiales reciclados.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Certifications */}
        <Section id="certificaciones" ariaLabelledby="cert-title" py="sm">
          <h2
            id="cert-title"
            className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-6"
          >
            Certificaciones y Normativas
          </h2>
          <p className="text-center text-muted-foreground text-base lg:text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Nuestro compromiso con la calidad está respaldado por las
            certificaciones más exigentes de la industria nacional e
            internacional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Certificaciones Column */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold text-center text-foreground mb-6">
                Certificaciones de Calidad
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white border border-border rounded-lg px-6 py-4 shadow-sm flex items-center justify-center gap-3"
                  >
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Normativas Column */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold text-center text-foreground mb-6">
                Normativas Mexicanas
              </h3>
              <div className="space-y-4">
                {normatives.map((norm, index) => (
                  <div
                    key={index}
                    className="bg-white border border-border rounded-lg px-6 py-4 shadow-sm flex items-center justify-center gap-3"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{norm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <CTA
          title="¿Quieres conocer más sobre nosotros?"
          description="Agenda una visita a nuestras instalaciones y conoce de primera mano nuestros procesos de calidad y compromiso con la excelencia."
          buttonText="Agenda una visita"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
