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
  Cylinder,
  CircuitBoard,
  AlignVerticalDistributeCenter,
  Cuboid,
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

  // Datos para el modal del Lingote de Aluminio
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

  // Datos para el modal del Cono Truncado de Aluminio
  const aluminumConeData = {
    title: "Cono Truncado de Aluminio",
    imageSrc: "/images/photo.png",
    specs: [
      "*La composición química de este producto se adapta de acuerdo con los requisitos establecidos por el cliente.",
      "Pureza: 99.7%",
      "Tamaños: Estándar y personalizados",
      "Aplicación: Acerías",
    ],
    composition: [
      { nombre: "Aluminio", formula: "Al", min: "95%", max: undefined },
      { nombre: "Silicio", formula: "Si", min: undefined, max: undefined },
      { nombre: "Fierro", formula: "Fe", min: undefined, max: undefined },
      { nombre: "Cobre", formula: "Cu", min: undefined, max: undefined },
      { nombre: "Magnesio", formula: "Mg", min: undefined, max: undefined },
      { nombre: "Manganeso", formula: "Mn", min: undefined, max: undefined },
      { nombre: "Zinc", formula: "Zn", min: undefined, max: undefined },
      { nombre: "Otros", formula: "-", min: undefined, max: undefined },
    ] as CompositionRow[],
  };

  // Datos para el modal de Briqueta de Aluminio
  const aluminumBriquetteData = {
    title: "Briqueta de Aluminio",
    imageSrc: "/images/photo.png",
    specs: [
      "Peso: 200 - 300 g",
      "Presentación en supersacos de 2 toneladas",
      'Dimensiones: 3 ½" x 2 ⅓" x 1 ¾"',
      "Punto de fusión: 660 °C",
      "Densidad relativa (agua=1): 2.3 - 2.5",
    ],
    composition: [
      { nombre: "Aluminio", formula: "Al", min: "95%", max: undefined },
      { nombre: "Silicio", formula: "Si", min: undefined, max: "0.7%" },
      { nombre: "Fierro", formula: "Fe", min: undefined, max: "1.0%" },
      { nombre: "Cobre", formula: "Cu", min: undefined, max: "0.7%" },
      { nombre: "Magnesio", formula: "Mg", min: undefined, max: "2.0%" },
      { nombre: "Manganeso", formula: "Mn", min: undefined, max: "1.0%" },
      { nombre: "Zinc", formula: "Zn", min: undefined, max: "0.1%" },
    ] as CompositionRow[],
  };

  // Datos para el modal de Posta de Aluminio
  const aluminumPasteData = {
    title: "Posta de Aluminio",
    imageSrc: "/images/photo.png",
    specs: [
      "Forma: Bote molido",
      "Granulometría: 80% mínimo entre 2 mm y 4 mm",
      "Peso molecular: 26.98",
      "Densidad relativa: 2.5 - 2.7",
      "Punto de fusión: 660 °C",
      "Presentación: Supersacos de 1.0 toneladas métricas",
    ],
    composition: [
      { nombre: "Aluminio", formula: "Al", min: "95%", max: undefined },
      { nombre: "Silicio", formula: "Si", min: undefined, max: "0.7%" },
      { nombre: "Fierro", formula: "Fe", min: undefined, max: "1.0%" },
      { nombre: "Cobre", formula: "Cu", min: undefined, max: "0.7%" },
      { nombre: "Magnesio", formula: "Mg", min: undefined, max: "2.0%" },
      { nombre: "Manganeso", formula: "Mn", min: undefined, max: "1.0%" },
      { nombre: "Zinc", formula: "Zn", min: undefined, max: "0.1%" },
      { nombre: "Otros", formula: "-", min: "-", max: "-" },
    ] as CompositionRow[],
  };

  // Datos para el modal de Cono de Cobre Refinado
  const copperConeData = {
    title: "Cono de Cobre Refinado",
    imageSrc: "/images/photo.png",
    specs: [
      "Peso: 800 - 1200 g",
      "Dimensiones: Altura 70 - 80 mm / Base 64 - 70 mm",
      "Punto de fusión: 1083 °C",
      "La composición química de este producto se adapta de acuerdo con los requisitos establecidos por el cliente.",
    ],
    composition: [
      { nombre: "Cobre", formula: "Cu", min: "99.95%", max: undefined },
      { nombre: "Níquel", formula: "Ni", min: undefined, max: undefined },
      { nombre: "Estaño", formula: "Sn", min: undefined, max: undefined },
      { nombre: "Fierro", formula: "Fe", min: undefined, max: undefined },
      { nombre: "Aluminio", formula: "Al", min: undefined, max: undefined },
      { nombre: "Silicio", formula: "Si", min: undefined, max: undefined },
      { nombre: "Plomo", formula: "Pb", min: undefined, max: undefined },
      { nombre: "Manganeso", formula: "Mn", min: undefined, max: undefined },
      { nombre: "Zinc", formula: "Zn", min: undefined, max: undefined },
    ] as CompositionRow[],
  };

  // Datos para el modal de Cobre Electrolítico
  const electrolyticalCopperData = {
    title: "Cobre Electrolítico",
    imageSrc: "/images/photo.png",
    specs: [
      "Null..."
    ],
    composition: [
      { nombre: "Cobre", formula: "Cu", min: "99.99%", max: undefined },
      { nombre: "Níquel", formula: "Ni", min: undefined, max: undefined },
      { nombre: "Estaño", formula: "Sn", min: undefined, max: undefined },
      { nombre: "Fierro", formula: "Fe", min: undefined, max: undefined },
      { nombre: "Aluminio", formula: "Al", min: undefined, max: undefined },
      { nombre: "Silicio", formula: "Si", min: undefined, max: undefined },
      { nombre: "Plomo", formula: "Pb", min: undefined, max: undefined },
      { nombre: "Manganeso", formula: "Mn", min: undefined, max: undefined },
      { nombre: "Zinc", formula: "Zn", min: undefined, max: undefined },
    ] as CompositionRow[],
  };

  const handleProductClick = (productId: number) => {
    if (productId === 1) {
      setSelectedProduct(aluminumConeData);
      setModalOpen(true);
    } else if (productId === 2) {
      setSelectedProduct(aluminumBriquetteData);
      setModalOpen(true);
    } else if (productId === 3) {
      setSelectedProduct(aluminumAlloyData);
      setModalOpen(true);
    } else if (productId === 4) {
      setSelectedProduct(aluminumPasteData);
      setModalOpen(true);
    } else if (productId === 5) {
      setSelectedProduct(copperConeData);
      setModalOpen(true);
    } else if (productId === 6) {
      setSelectedProduct(electrolyticalCopperData);
      setModalOpen(true);
    }
  };

  const products = [
    {
      id: 1,
      icon: Cone,
      title: "Cono Truncado de Aluminio",
      description:
        "Especial para procesos de aleación base aluminio, facilitando la dosificación y manipulación en hornos industriales",
      specifications: [
        "Peso: 150 - 300 g",
        "Presentación: Super sacos 2 toneladas métricas",
        "Dimensiones: Altura 45 - 60 mm / Base 54 - 64 mm",
        "Color: Gris metálico",
        "Punto de fusión: 660 °C",
      ],
      image: "/images/photo.png",
    },
    {
      id: 2,
      icon: Cylinder,
      title: "Briquetas de Aluminio",
      description:
        "Piezas compactas de 200 a 300 g obtenidas de bote molido. Usadas en la refinación de acero líquido para remover oxígeno disuelto, “calmar” el baño metálico y mejorar propiedades metalmecánicas.",
      specifications: [
        "Peso: 200 - 300 g",
        "Presentación: En supersacos de 2 toneladas",
        "Dimensiones: 3 ½” x 2 ⅓” x 1 ¾”",
        "Punto de fusión: 660 °C",
        "Densidad relativa (agua=1) : 2.3 - 2.5",
      ],
      image: "/images/photo.png",
    },
    {
      id: 3,
      icon: Cuboid,
      title: "Lingote de Aluminio",
      description:
        "Lingotes, fabricados con un mínimo de 95% de aluminio. Utilizados principalmente como desoxidante en procesos siderúrgicos, garantizan estabilidad y eficiencia en la fundición",
      specifications: ["Peso: 8 - 10 kg", 'Dimensiones: 24" largo x 4" ancho'],
      image: "/images/photo.png",
    },
    {
      id: 4,
      icon: CircuitBoard,
      title: "Posta de Aluminio",
      description:
        "Es utilizada como desoxidante en procesos siderúrgicos, garantizando eficiencia y estabilidad en la refinación del acero. Su presentación en bote molido facilita la manipulación y dosificación en planta.",
      specifications: [
        "Forma: Bote molido",
        "Granulometría: 80% mínimo entre 2 mm y 4 mm",
        "Densidad relativa: 2.5 - 2.7",
        "Punto de fusión: 660 °C",
        "Presentación: Supersacos de 1.0 toneladas métricas",
      ],
      image: "/images/photo.png",
    },
    {
      id: 5,
      icon: Cone,
      title: "Cono de Cobre Refinado",
      description:
        "Su excelente conductividad y resistencia los hacen ideales para usos eléctricos, electrónicos e industriales. Diseñados bajo especificaciones del cliente.",
      specifications: [
        "Peso: 800 - 1200 g",
        "Dimensiones: Altura 70 - 80 mm / Base 64 - 70 mm",
        "Punto de fusión: 1083 °C",
      ],
      image: "/images/photo.png",
    },
    {
      id: 6,
      icon: AlignVerticalDistributeCenter,
      title: "Cobre Electrolítico",
      description: "Null....",
      specifications: ["Null..."],
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
              calidad y están respaldados por certificaciones ISO 9001:2015, NOM-043-SEMARNAT-1993,
              NOM-085-SEMARNAT-2011. Nuestro laboratorio interno garantiza la consistencia en cada 
              lote producido.
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
