"use client";

import { useState } from "react";
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
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    const formData = new FormData(e.currentTarget);

    // Agregar campos necesarios para Web3Forms
    formData.append("access_key", "7d534976-e247-428d-8f4d-80502e9225d7");
    formData.append("subject", "Nueva consulta desde ALUDEOX Landing Page");
    formData.append("from_name", "ALUDEOX Landing Page");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormError(
        "Hubo un error al enviar tu mensaje. Por favor intenta nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
                {!isSubmitted ? (
                  <>
                    <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                      Solicita tu Cotización
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot Spam Protection */}
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

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
                            disabled={isSubmitting}
                            className="pl-10 h-12"
                            placeholder="Tu nombre completo"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-base font-medium"
                        >
                          Correo Electrónico *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            required
                            disabled={isSubmitting}
                            className="pl-10 h-12"
                            placeholder="tu@empresa.com"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-base font-medium"
                        >
                          Empresa
                        </Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="text"
                            id="company"
                            name="company"
                            disabled={isSubmitting}
                            className="pl-10 h-12"
                            placeholder="Nombre de tu empresa"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-base font-medium"
                        >
                          Teléfono
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            disabled={isSubmitting}
                            className="pl-10 h-12"
                            placeholder="+52 (123) 456-7890"
                          />
                        </div>
                      </div>

                      {/* Subject Select */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="inquiry_type"
                          className="text-base font-medium"
                        >
                          Tipo de Consulta *
                        </Label>
                        <select
                          name="inquiry_type"
                          id="inquiry_type"
                          required
                          disabled={isSubmitting}
                          className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="Cotización de Productos">
                            Cotización de Productos
                          </option>
                          <option value="Asesoría Técnica">
                            Asesoría Técnica
                          </option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-base font-medium"
                        >
                          Mensaje *
                        </Label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            disabled={isSubmitting}
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                            placeholder="Cuéntanos sobre tu proyecto, las especificaciones técnicas que necesitas, volúmenes requeridos y cualquier otro detalle relevante..."
                          />
                        </div>
                      </div>

                      {/* Error Message */}
                      {formError && (
                        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
                          {formError}
                        </div>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Enviar Consulta
                          </>
                        )}
                      </Button>

                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          * Campos obligatorios
                        </span>
                      </div>
                    </form>
                  </>
                ) : (
                  /* Success Message */
                  <div className="text-center py-8">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                      <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h2 className="text-xl lg:text-2xl font-bold text-primary mb-3">
                        ¡Mensaje Enviado Exitosamente!
                      </h2>
                      <p className="text-base text-primary/80 mb-4">
                        Gracias por contactarnos. Hemos recibido tu consulta,
                        nuestro equipo técnico se pondrá en contacto contigo
                      </p>
                      <p className="text-sm text-primary/70">
                        Puedes llamarnos al{" "}
                        <strong className="text-primary">
                          +52 (33) 3695-1086
                        </strong>
                      </p>
                    </div>

                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="mt-4 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                    >
                      Enviar Otra Consulta
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="order-2 lg:order-2 space-y-1 lg:space-y-1 lg:flex lg:flex-col lg:justify-between lg:h-full">
              {/* Contact Cards */}
              <Card>
                <CardContent className="py-1 px-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base lg:text-lg font-semibold text-foreground mb-1">
                        Nuestra Ubicación
                      </h3>
                      <p className="text-base lg:text-base text-muted-foreground leading-relaxed mb-2">
                        Lic. Ramiro Hernández 430,
                        <br />
                        Minerales, Baja California, 44008
                        <br />
                        Las Pintitas, Jal.
                      </p>

                      {/* Mapa embebido de Google Maps */}
                      <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border">
                        <a
                          href="https://www.google.com/maps/place/Aluminios+Desoxidantes+de+Occidente,+S.A.+De+C.V./@20.5453604,-103.2969613,4754m/data=!3m1!1e3!4m6!3m5!1s0x842f4a73730c7367:0x6780cc62e55a2e3!8m2!3d20.5490173!4d-103.3005769!16s%2Fg%2F1vknpq99?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full relative"
                        >
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.0567890123456!2d-103.3005769!3d20.5490173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4a73730c7367%3A0x6780cc62e55a2e3!2sAluminios%20Desoxidantes%20de%20Occidente%2C%20S.A.%20De%20C.V.!5e0!3m2!1ses!2smx!4v1234567890123&amp;output=embed&amp;z=15&amp;iwloc=&amp;disableDefaultUI=true&amp;gestureHandling=none&amp;zoomControl=true&amp;mapTypeControl=false&amp;scaleControl=false&amp;streetViewControl=false&amp;rotateControl=false&amp;fullscreenControl=false"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="pointer-events-none"
                            title="Ubicación de ALUDEOX"
                          />
                          {/* Overlay clickeable invisible */}
                          <div className="absolute inset-0 bg-transparent hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 hover:opacity-100 transition-opacity">
                              <span className="text-sm text-gray-800 font-medium">
                                Abrir en Google Maps
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="py-1 px-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
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
                <CardContent className="py-1 px-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
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
                <CardContent className="py-1 px-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base lg:text-lg font-semibold text-foreground">
                          Horarios de Atención
                        </h3>
                      </div>
                      <div className="text-base lg:text-base text-muted-foreground leading-relaxed space-y-1">
                        <p>
                          <strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
