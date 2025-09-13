"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Quiénes somos", href: "#" },
  { name: "Productos", href: "#" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* fila principal */}
        <div className="flex h-16 items-center justify-between">
          {/* LEFT cluster: logo + navegación */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="#" className="inline-block" aria-label="Inicio">
              <div className="relative h-8 w-32 md:h-10 md:w-40">
                <Image
                  src="/secondary_logo.png"
                  alt="ALUDEOX — Aleaciones Metálicas"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-6"
              aria-label="Navegación principal"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT: CTA (se queda donde está) */}
          <div className="hidden md:flex">
            <Button>
              Contacto
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 border-t border-border">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full">Contacto</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
