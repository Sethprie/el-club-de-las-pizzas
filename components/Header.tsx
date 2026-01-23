import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="text-primary">El Club de</span>
          <span className="text-foreground"> las Pizzas</span>
        </h1>
        <nav className="flex items-center gap-6 md:gap-12 text-sm md:text-base">
          <Link href="#menu" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            MENÚ
          </Link>
          <Link href="#location" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            UBICACIÓN
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            CONTACTO
          </Link>
        </nav>
      </div>
    </header>
  );
}
