"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteHeader } from "@/components/Header";
import { SiteFooter } from "@/components/FooterSection";
import { CTA } from "@/components/Cta";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Section } from "@/components/layout/Section";
import {
  Cone,
  Cog,
  Factory,
  CircuitBoard,
  Car,
  Building2,
  Shield,
} from "lucide-react";
import {
  ProductModal,
  type CompositionRow,
} from "@/components/products/ProductModal";

export function ProductsPageContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    title: string;
    imageSrc: string;
    specs: string[];
    composition: CompositionRow[];
  } | null>(null);

  // Datos de ejemplo para el modal del Lingote de Aluminio
  const aluminumAlloyData = {
    title: "Lingote de Aluminio",
    imageSrc: "/images/photo.png",
    specs: ["Peso: 8 - 10 kg", 'Dimensiones: 24" largo x 4" ancho'],
    composition: [
      { nombre: "Aluminio", formula: "Al", min: "95%", max: undefined },
      { nombre: "Silicio", formula: "Si", min: undefined, max: "1.0%" },
      { nombre: "Fierro", formula: "Fe", min: undefined, max: "1.0%" },
      { nombre: "Cobre", formula: "Cu", min: undefined, max: "1.0%" },
      { nombre: "Magnesio", formula: "Mg", min: undefined, max: "1.0%" },
      { nombre: "Manganeso", formula: "Mn", min: undefined, max: "1.0%" },
      { nombre: "Zinc", formula: "Zn", min: undefined, max: "1.0%" },
    ] as CompositionRow[],
  };

  const handleProductClick = (productId: number) => {
    // Solo abre el modal para "Lingotes de Aleaciones" (id: 3)
    if (productId === 3) {
      setSelectedProduct(aluminumAlloyData);
      setModalOpen(true);
    }
  };

  const products = [
    {
      id: 1,
      icon: Cone,
      title: "Conos de Aluminio",
      description:
        "Conos de aluminio de alta pureza diseñados específicamente como desoxidantes para la industria siderúrgica. Nuestro producto insignia que revolucionó el mercado mexicano con su efectividad en la eliminación de óxidos en procesos de fundición.",
      specifications: [
        "Pureza: 99.7%",
        "Tamaños: Estándar y personalizados",
        "Aplicación: Acerías",
      ],
      image: "/images/photo.png",
    },
    {
      id: 2,
      icon: Factory,
      title: "Briquetas de Bote Molido",
      description:
        "Briquetas compactadas fabricadas a partir de chatarra de aluminio procesada. Producto pionero en México que optimiza el manejo y dosificación en procesos industriales, garantizando consistencia y reduciendo desperdicios.",
      specifications: [
        "Densidad controlada",
        "Fácil manejo",
        "Dosificación precisa",
      ],
      image: "/images/photo.png",
    },
    {
      id: 3,
      icon: Building2,
      title: "Lingotes de Aleaciones",
      description:
        "Lingotes de aleaciones de aluminio y cobre fabricados bajo estrictos controles de calidad. Disponibles en diversas composiciones para satisfacer las necesidades específicas de la industria automotriz y de fundición.",
      specifications: [
        "Múltiples aleaciones",
        "Control de calidad ISO",
        "Tamaños estándar",
      ],
      image: "/images/photo.png",
    },
    {
      id: 4,
      icon: CircuitBoard,
      title: "Aleaciones Madre (Master Alloys)",
      description:
        "Aleaciones madre de alta precisión para modificar las propiedades mecánicas y químicas de metales base. Desarrolladas con tecnología avanzada para aplicaciones críticas en sectores automotriz y aeroespacial.",
      specifications: [
        "Alta precisión",
        "Múltiples elementos",
        "Certificación internacional",
      ],
      image: "/images/photo.png",
    },
    {
      id: 5,
      icon: Cog,
      title: "Cobre Electrolítico",
      description:
        "Cobre de pureza electrolítica 99.99% para aplicaciones en las industrias eléctrica y electrónica. Procesado bajo condiciones controladas para garantizar la máxima conductividad y calidad superficial.",
      specifications: [
        "Pureza: 99.99%",
        "Conductividad óptima",
        "Calidad electrónica",
      ],
      image: "/images/photo.png",
    },
    {
      id: 6,
      icon: Car,
      title: "Aleaciones Automotrices",
      description:
        "Aleaciones especializadas para la industria automotriz, incluyendo componentes para motores de combustión interna y transmisiones. Formulaciones optimizadas para resistencia, durabilidad y eficiencia térmica.",
      specifications: [
        "Resistencia térmica",
        "Durabilidad comprobada",
        "Normas automotrices",
      ],
      image: "/images/photo.png",
    },
    {
      id: 7,
      icon: Shield,
      title: "Productos Especializados",
      description:
        "Desarrollamos productos personalizados según las necesidades específicas de cada cliente. Nuestro equipo técnico trabaja en colaboración para crear soluciones únicas que optimicen procesos y reduzcan costos.",
      specifications: [
        "Desarrollo personalizado",
        "Asesoría técnica",
        "Soporte continuo",
      ],
      image: "/images/photo.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Products Grid */}
        <Section
          id="catalogo-productos"
          ariaLabelledby="catalog-title"
          className="bg-background"
          py="sm"
        >
          <div className="text-center mb-12">
            <h1
              id="p-title"
              className="text-3xl lg:text-4xl font-bold text-foreground leading-snug text-balance mb-4"
            >
              Nuestros Productos
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden p-0"
                onClick={() => handleProductClick(product.id)}
              >
                {/* Imagen sin márgenes */}
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={product.image}
                    alt={`${product.title} - Producto ALUDEOX`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg lg:text-xl">
                      {product.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </CardDescription>

                  <div className="space-y-2 pb-4">
                    <h4 className="font-semibold text-foreground text-sm">
                      Especificaciones principales:
                    </h4>
                    <ul className="space-y-1">
                      {product.specifications.map((spec, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Additional Info Section */}
        <Section id="info-adicional" py="sm">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Calidad y Certificaciones
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">
              Todos nuestros productos cumplen con estándares internacionales de
              calidad y están respaldados por certificaciones ISO 9001:2015, ISO
              14001:2015 y OHSAS 18001:2007. Nuestro laboratorio interno
              garantiza la consistencia en cada lote producido.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  99.9%
                </div>
                <p className="text-base text-foreground font-medium">
                  Índice de calidad
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <p className="text-base text-foreground font-medium">
                  Años de experiencia
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-base text-foreground font-medium">
                  Clientes satisfechos
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <CTA
          title="¿Necesitas un producto específico?"
          description="Nuestro equipo técnico puede desarrollar aleaciones personalizadas según tus necesidades. Contáctanos para una cotización personalizada."
          buttonText="Solicitar cotización"
        />
      </main>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title={selectedProduct.title}
          imageSrc={selectedProduct.imageSrc}
          specs={selectedProduct.specs}
          composition={selectedProduct.composition}
        />
      )}

      <SiteFooter />
    </div>
  );
}
