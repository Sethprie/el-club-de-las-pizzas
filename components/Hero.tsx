'use client';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-primary/20">
      
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/pizza-stock.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Glow decorativo opcional */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight text-white">
          La mejor
          <br />
          <span className="text-secondary">Pizza</span>
          <br />
          del Zulia
        </h2>

        <p className="text-base md:text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Sabor auténtico, ingredientes frescos y tradición zuliana en cada mordida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all"
          >
            Ver Menú
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-secondary text-secondary-foreground font-bold text-lg hover:bg-secondary/90 transition-all"
          >
            Ordenar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
