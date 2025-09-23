"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type CompositionRow = {
  nombre: string; // "Aluminio"
  formula: string; // "Al"
  min?: string; // "95%"
  max?: string; // "1.0%"
};

export type ProductModalProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title: string; // "Lingote de Aluminio"
  imageSrc: string; // "/images/lingote.png"
  specs: string[]; // ["Peso: 8 – 10 kg", ...]
  composition: CompositionRow[]; // filas para la tabla
};

export function ProductModal({
  open,
  onOpenChange,
  title,
  imageSrc,
  specs,
  composition,
}: ProductModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[900vw] w-full max-h-[85vh] md:max-h-[95vh] overflow-y-auto m-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-bold text-foreground">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Fila 1: Tabla de composición química - Ancho completo */}
          <div className="w-full">
            <h3 className="text-base font-semibold text-foreground mb-3">
              Composición Química
            </h3>
            <div className="border border-border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="font-semibold text-foreground">
                      Nombre Químico
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Fórmula
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      % min
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      % max
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {composition.map((row, index) => (
                    <TableRow key={index} className="border-border">
                      <TableCell className="font-medium text-foreground">
                        {row.nombre}
                      </TableCell>
                      <TableCell className="text-foreground">
                        {row.formula}
                      </TableCell>
                      <TableCell className="text-foreground">
                        {row.min || "—"}
                      </TableCell>
                      <TableCell className="text-foreground">
                        {row.max || "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Fila 2: Imagen y Especificaciones en dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Especificaciones principales - Aparece primero en móvil, segunda en desktop */}
            <div className="space-y-3 order-1 md:order-2">
              <h3 className="text-base font-semibold text-foreground">
                Especificaciones Principales
              </h3>
              <div className="border border-border rounded-md p-4 bg-background">
                <ul className="space-y-2">
                  {specs.map((spec, index) => (
                    <li
                      key={index}
                      className="text-foreground flex items-start"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/60 mr-3 mt-2 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Imagen del producto - Aparece segunda en móvil, primera en desktop */}
            <div className="space-y-3 order-2 md:order-1">
              <h3 className="text-base font-semibold text-foreground">
                Producto
              </h3>
              <div className="relative aspect-square w-full max-w-sm">
                <Image
                  src={imageSrc}
                  alt={`Imagen de ${title}`}
                  fill
                  className="rounded-md border border-border object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
