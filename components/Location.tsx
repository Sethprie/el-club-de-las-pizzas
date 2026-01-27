'use client';

import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  const googleMapsUrl =
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d490.2868043296034!2d-71.6420827414377!3d10.5561169810753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDMzJzIxLjkiTiA3McKwMzgnMzEuMCJX!5e0!3m2!1ses-419!2sve!4v1769553310383!5m2!1ses-419!2sve';

  return (
    <section id="location" className="py-20 md:py-32 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-left">
          Nuestra Ubicación
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
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
          <div className="flex flex-col justify-between space-y-10">
            {/* Address */}
            <div className="flex flex-col border-l-4 border-primary pl-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-xs text-primary font-bold tracking-wider uppercase">
                  Dirección
                </p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                Urbanización La Coromoto
                <br />
                San Francisco, Zulia, Venezuela
              </h3>
            </div>

            {/* Phone */}
            <div className="flex flex-col border-l-4 border-secondary pl-6">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-secondary" />
                <p className="text-xs text-secondary font-bold tracking-wider uppercase">
                  Teléfono
                </p>
              </div>
              <a
                href="tel:+584122557840"
                className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors"
              >
                +58 (412) 255-7840
              </a>
            </div>

            {/* Hours */}
            <div className="flex flex-col border-l-4 border-secondary pl-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-secondary" />
                <p className="text-xs text-secondary font-bold tracking-wider uppercase">
                  Horario
                </p>
              </div>
              <div className="text-foreground space-y-1 text-sm md:text-base">
                <div className="flex justify-between">
                  <span>Lunes - Domingo:</span>
                  <span className="text-muted-foreground">12:00 PM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
