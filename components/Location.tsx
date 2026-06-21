'use client';

import { MapPin, Phone, Clock } from 'lucide-react';
import BackgroundPattern from './BackgroundPattern';

export default function Location() {
  const googleMapsUrl =
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d490.2868043296034!2d-71.6420827414377!3d10.5561169810753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDMzJzIxLjkiTiA3McKwMzgnMzEuMCJX!5e0!3m2!1ses-419!2sve!4v1769553310383!5m2!1ses-419!2sve';

  return (
    <section id="location" className="relative py-20 md:py-32 bg-gradient-to-b from-background via-card/20 to-background border-b border-primary/10 overflow-hidden">
      <BackgroundPattern />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Ubicación</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Nuestra Ubicación
          </h2>
          <p className="text-lg text-muted-foreground">Visítanos en San Francisco, Zulia y disfruta de las mejores pizzas artesanales.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="w-full aspect-square rounded-xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de El Club de las Pizzas"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between space-y-6">
            {/* Address */}
            <div className="bg-card border border-border/60 rounded-xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-primary font-bold tracking-wider uppercase">
                  Dirección
                </p>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                Urbanización La Coromoto
                <br />
                <span className="text-base md:text-lg text-muted-foreground font-normal">San Francisco, Zulia, Venezuela</span>
              </h3>
            </div>

            {/* Phone */}
            <div className="bg-card border border-border/60 rounded-xl p-6 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-xs text-secondary font-bold tracking-wider uppercase">
                  Teléfono
                </p>
              </div>
              <a
                href="tel:+584122557840"
                className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                +58 (412) 255-7840
                <span className="text-sm text-muted-foreground">Llama o WhatsApp</span>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border/60 rounded-xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-primary font-bold tracking-wider uppercase">
                  Horario de Atención
                </p>
              </div>
              <div className="text-foreground space-y-2 text-base">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Lunes - Domingo:</span>
                  <span className="text-primary font-bold">12:00 PM - 10:00 PM</span>
                </div>
                <p className="text-xs text-muted-foreground pt-2">Consulta disponibilidad en temporada alta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
