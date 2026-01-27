'use client';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-primary/20">
      
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="/pizza-stock.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay cálido con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Glows decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.05] tracking-tight text-white">
          Las Pizzas
          <br />
          <span className="text-primary">Más Variadas</span>
          <br />
          <span className="text-white/90">del Zulia</span>
        </h2>

        <p className="text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Sabor auténtico, ingredientes frescos y tradición zuliana
          <br className="hidden sm:block" />
          en cada mordida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="
              px-10 py-4 rounded-lg
              bg-primary text-primary-foreground
              font-bold text-lg
              shadow-[0_10px_40px_rgba(255,60,0,0.35)]
              hover:translate-y-[-2px] hover:shadow-[0_20px_60px_rgba(255,60,0,0.45)]
              transition-all duration-300
            "
          >
            Ver Menú
          </a>

          <a
            href="#contact"
            className="
              px-10 py-4 rounded-lg
              bg-white/10 text-white
              font-bold text-lg
              backdrop-blur-md
              border border-white/20
              hover:bg-white/20 hover:translate-y-[-2px]
              transition-all duration-300
            "
          >
            Ordenar Ahora
          </a>
        </div>

        {/* Detalle sutil */}
        <div className="mt-14 flex justify-center">
          <div className="w-24 h-[2px] bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
