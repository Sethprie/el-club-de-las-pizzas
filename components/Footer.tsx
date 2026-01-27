'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/95 border-t border-border py-16 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-primary">
              El Club de las Pizzas
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pizzas auténticas hechas con maestría italiana y sabor venezolano. Cada pizza cuenta una historia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs text-primary font-bold tracking-wider mb-4">ENLACES</p>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className="text-white hover:text-primary transition-colors text-sm font-medium">
                  Menú
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-primary transition-colors text-sm font-medium">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#location" className="text-white hover:text-primary transition-colors text-sm font-medium">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-primary font-bold tracking-wider mb-4">SÍGUENOS</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-white hover:text-primary transition-colors text-sm font-medium">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors text-sm font-medium">
                WhatsApp
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors text-sm font-medium">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} El Club de las Pizzas. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
