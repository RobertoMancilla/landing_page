"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/navigation";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Función para determinar si un enlace está activo
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href;
  };

  // Función para obtener las clases del enlace
  const getLinkClasses = (href: string, isMobile = false) => {
    const isActive = isActiveLink(href);
    const baseClasses = isMobile
      ? "block px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
      : "text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 px-1 py-0.5 relative";

    if (isActive) {
      return `${baseClasses} text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary`;
    }

    return `${baseClasses} text-muted-foreground hover:text-primary`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* fila principal */}
        <div className="flex h-16 items-center justify-between">
          {/* LEFT cluster: logo + navegación */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="inline-block" aria-label="Inicio">
              <div className="relative h-8 w-32 md:h-10 md:w-40">
                <Image
                  src="/secondary_logo.png"
                  alt="ALUDEOX — Aleaciones Metálicas"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-6"
              aria-label="Navegación principal"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={getLinkClasses(item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* RIGHT: CTA (se queda donde está) */}
          <div className="hidden md:flex">
            <Button asChild>
              <Link href="/contact">Contacto</Link>
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
                <Link
                  key={item.name}
                  href={item.href}
                  className={getLinkClasses(item.href, true)}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/contact">Contacto</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
