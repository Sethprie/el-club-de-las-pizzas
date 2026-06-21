'use client';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-primary/10">
      
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-110"
        src="/pizza-stock.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Premium overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

      {/* Animated glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Contenido Premium */}
      <div className="relative z-10 text-center px-4 max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Etiqueta superior */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Pizzería Artesanal</span>
        </div>

        {/* Títulos */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight text-balance">
          <span className="block text-white">Las Pizzas</span>
          <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Más Variadas</span>
          <span className="block text-white/90">del Zulia</span>
        </h1>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Cada pizza es una obra maestra artesanal preparada con ingredientes premium y pasión. 
          <br className="hidden sm:block" />
          Descubre combinaciones únicas que celebran la tradición culinaria venezolana.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#menu"
            className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-base md:text-lg shadow-[0_20px_60px_rgba(255,60,0,0.4)] hover:shadow-[0_30px_80px_rgba(255,60,0,0.6)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explorar Menú
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-lg bg-white/15 text-white font-bold text-base md:text-lg backdrop-blur-md border border-white/30 hover:bg-white/25 hover:border-white/50 hover:-translate-y-1 transition-all duration-300"
          >
            Realizar Pedido
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-8">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
