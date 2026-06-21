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

      {/* Overlay mejorado - más luminoso */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

      {/* Glows decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Contenido Premium */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Etiqueta superior */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/30 border border-primary/60 rounded-full backdrop-blur-md">
          <span className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Pizzería Artesanal</span>
        </div>

        {/* Títulos */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.15] tracking-tight text-balance">
          <span className="block text-white drop-shadow-lg">Las Pizzas</span>
          <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">Más Variadas</span>
          <span className="block text-white/95 drop-shadow-lg">del Zulia</span>
        </h1>

        {/* Descripción */}
        <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow">
          Cada pizza es una obra maestra artesanal preparada con ingredientes premium y pasión culinaria. 
          Descubre las mejores combinaciones que celebran la tradición venezolana.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#menu"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 drop-shadow-lg"
          >
            Explorar Menú
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/40 hover:bg-white/30 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-300 drop-shadow-lg"
          >
            Realizar Pedido
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-6 animate-bounce">
          <svg className="w-6 h-6 text-primary drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
