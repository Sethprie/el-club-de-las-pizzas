export default function Location() {
  const googleMapsUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.0908863089653!2d-71.28!3d10.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89a1c8b8b8b8bd%3A0x0!2sCaracas%2C%20Venezuela!5e0!3m2!1ses!2sVE!4v1234567890';

  return (
    <section id="location" className="py-20 md:py-32 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Nuestra Ubicación</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="border border-border overflow-hidden h-96 md:h-full min-h-96 hover:border-muted transition-all duration-300">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Pizzería Italiana"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between space-y-8">
            {/* Address */}
            <div className="border-l-2 border-primary pl-6">
              <p className="text-xs text-secondary font-bold tracking-wider mb-2">DIRECCIÓN</p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Avenida Principal,
                <br />
                Edificio Centro
              </h3>
              <p className="text-muted-foreground mt-2">Caracas, Venezuela</p>
            </div>

            {/* Phone */}
            <div className="border-l-2 border-secondary pl-6">
              <p className="text-xs text-secondary font-bold tracking-wider mb-2">TELÉFONO</p>
              <a href="tel:+584121234567" className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors">
                +58 (412) 123-4567
              </a>
            </div>

            {/* Hours */}
            <div className="border-l-2 border-secondary pl-6">
              <p className="text-xs text-secondary font-bold tracking-wider mb-4">HORARIO</p>
              <div className="text-foreground space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Lun - Jue:</span>
                  <span className="text-muted-foreground">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Vie - Sáb:</span>
                  <span className="text-muted-foreground">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-muted-foreground">12:00 PM - 10:00 PM</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/pizzeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-secondary-foreground font-bold py-3 px-8 border border-secondary hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/20 tracking-wide w-fit"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
