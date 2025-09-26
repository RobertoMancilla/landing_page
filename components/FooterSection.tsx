import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { footerNavigation, footerLinks } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--brand-gray-800)] border-t border-brand-gray-200/20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="relative w-32 h-12">
                <Image
                  src="/images/secondary_logo.png"
                  alt="Logo Aleaciones Metálicas"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Especialistas en fundición y transformación de aleaciones de
                aluminio y cobre con más de 30 años de experiencia en soluciones
                industriales.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Navegación</h3>
              <ul className="space-y-2">
                {footerNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-gray-800)] rounded-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Contacto</h3>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+52 (33) 3695-1086</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>contacto@aludeox.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  <div className="leading-relaxed">
                    <p>Lic. Ramiro Hernández 430,</p>
                    <p>Minerales, Baja California, 44008</p>
                    <p>Las Pintitas, Jal.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Horarios</h3>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <p>Lun - Vie: 9:00 - 18:00</p>
                    <p>Sáb: 9:00 - 14:00</p>
                    <p>Dom: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © 2024 ALUDEOX. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
