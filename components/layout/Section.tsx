import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  /** ID único para anclar la sección */
  id?: string;
  /** Elemento HTML a renderizar (default: section) */
  as?: React.ElementType;
  /** Contenido de la sección */
  children: React.ReactNode;
  /** Clases CSS adicionales para el wrapper externo */
  className?: string;
  /** Clases CSS adicionales para el contenedor interno */
  containerClassName?: string;
  /** ID del heading que describe esta sección para accesibilidad */
  ariaLabelledby?: string;
  /** Ancho máximo del contenedor (default: screen-2xl) */
  maxW?: "2xl" | "5xl" | "7xl" | "screen-2xl";
  /** Padding vertical (default: lg) */
  py?: "xs" | "sm" | "md" | "lg";
  /** Si es true, omite el contenedor centrado para ancho completo */
  bleed?: boolean;
}

export function Section({
  id,
  as: Component = "section",
  children,
  className,
  containerClassName,
  ariaLabelledby,
  maxW = "screen-2xl",
  py = "lg",
  bleed = false,
  ...props
}: SectionProps) {
  // Mapeo de maxW a clases Tailwind
  const maxWidthClasses = {
    "2xl": "max-w-2xl",
    "5xl": "max-w-5xl",
    "7xl": "max-w-7xl",
    "screen-2xl": "max-w-screen-2xl",
  };

  // Mapeo de py a clases Tailwind
  const paddingClasses = {
    xs: "py-4 lg:py-1",
    sm: "py-10 lg:py-14",
    md: "py-16 lg:py-20",
    lg: "py-16 lg:py-24",
  };

  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(paddingClasses[py], className)}
      {...props}
    >
      {bleed ? (
        children
      ) : (
        <div
          className={cn(
            "mx-auto px-4 sm:px-6 lg:px-8",
            maxWidthClasses[maxW],
            containerClassName
          )}
        >
          {children}
        </div>
      )}
    </Component>
  );
}

export default Section;
