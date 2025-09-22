import type { Metadata } from "next";
import { SiteHeader } from "@/components/Header";
import { SiteFooter } from "@/components/FooterSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Section } from "@/components/layout/Section";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto - ALUDEOX",
  description:
    "Contáctanos para cotizaciones personalizadas, asesoría técnica y soluciones en aleaciones de aluminio y cobre. Nuestro equipo está listo para ayudarte.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <Section
          id="contacto"
          ariaLabelledby="contact-title"
          py="sm"
          containerClassName="lg:px-10"
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h1
              id="contact-title"
              className="text-3xl lg:text-4xl font-bold text-foreground leading-snug text-balance"
            >
              Contáctanos
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mt-4 max-w-3xl mx-auto">
              Nuestro equipo técnico está listo para desarrollar la aleación
              perfecta para tu proyecto e industria. Agenda una consulta
              personalizada.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-stretch">
            {/* Contact Form */}
            <Card className="order-1 lg:order-1">
              <CardContent className="p-6">
                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                  Solicita tu Cotización
                </h2>
                <form className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-medium">
                      Nombre Completo *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="pl-10 h-12"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Correo Electrónico *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="pl-10 h-12"
                        placeholder="tu@empresa.com"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-base font-medium">
                      Empresa
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        className="pl-10 h-12"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-medium">
                      Teléfono
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="pl-10 h-12"
                        placeholder="+52 (123) 456-7890"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-base font-medium">
                      Tipo de Consulta *
                    </Label>
                    <Select name="subject" required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cotizacion">
                          Cotización de Productos
                        </SelectItem>
                        <SelectItem value="asesoria">
                          Asesoría Técnica
                        </SelectItem>
                        <SelectItem value="visita">Agendar Visita</SelectItem>
                        <SelectItem value="distribuidor">
                          Ser Distribuidor
                        </SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-medium">
                      Mensaje *
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="pl-10 resize-none min-h-[120px]"
                        placeholder="Cuéntanos sobre tu proyecto, las especificaciones técnicas que necesitas, volúmenes requeridos y cualquier otro detalle relevante..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Consulta
                  </Button>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      * Campos obligatorios
                    </span>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="order-2 lg:order-2 space-y-6 lg:space-y-8 lg:flex lg:flex-col lg:justify-between lg:h-full">
              {/* Contact Cards */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2">
                        Nuestra Ubicación
                      </h3>
                      <p className="text-base lg:text-base text-muted-foreground leading-relaxed">
                        Lic. Ramiro Hernández 430,
                        <br />
                        Minerales, Baja California, 44008
                        <br />
                        Las Pintitas, Jal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-base lg:text-lg font-semibold text-foreground">
                          Teléfono
                        </h3>
                      </div>
                      <p className="text-base lg:text-base text-muted-foreground leading-relaxed">
                        +52 (33) 3695-1086
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-base lg:text-lg font-semibold text-foreground">
                          Correo Electrónico
                        </h3>
                      </div>
                      <p className="text-base lg:text-base text-muted-foreground leading-relaxed">
                        ventas@aludeox.com
                        <br />
                        info@aludeox.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-base lg:text-lg font-semibold text-foreground">
                          Horarios de Atención
                        </h3>
                      </div>
                      <div className="text-base lg:text-base text-muted-foreground leading-relaxed space-y-1">
                        <p>
                          <strong>Lunes a Viernes:</strong> 8:00 AM - 6:00 PM
                        </p>
                        <p>
                          <strong>Sábados:</strong> 9:00 AM - 2:00 PM
                        </p>
                        <p>
                          <strong>Domingos:</strong> Cerrado
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Additional Info Section */}
        <Section id="info-adicional" className="bg-background" py="sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ¿Cómo Podemos Ayudarte?
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Nuestro equipo técnico especializado está preparado para ofrecerte
              soluciones personalizadas en aleaciones metálicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2">
                  Asesoría Inmediata
                </h3>
                <p className="text-base lg:text-base text-muted-foreground leading-relaxed">
                  Llámanos para consultas técnicas urgentes y obtén respuestas
                  inmediatas de nuestros especialistas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2">
                  Cotizaciones Detalladas
                </h3>
                <p className="text-base lg:text-base text-muted-foreground leading-relaxed">
                  Envíanos tus especificaciones y recibe cotizaciones
                  personalizadas en menos de 24 horas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2">
                  Visitas Técnicas
                </h3>
                <p className="text-base lg:text-base text-muted-foreground leading-relaxed">
                  Agenda una visita a nuestras instalaciones y conoce nuestros
                  procesos de primera mano.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
