'use client';

export default function BackgroundPattern() {
  const icons = [
    // Pizza
    <svg key="pizza-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16">
      <path d="M12 2L2 20h20L12 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="9" cy="15" r="1" fill="currentColor" />
      <circle cx="15" cy="13" r="1" fill="currentColor" />
    </svg>,
    
    // Tomate
    <svg key="tomato-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-14 h-14">
      <circle cx="12" cy="13" r="8" strokeWidth="1.5" />
      <path d="M12 5v3M8 7l-2-2M16 7l2-2" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,

    // Queso
    <svg key="cheese-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path d="M4 12L12 4l8 8v6H4v-6z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
    </svg>,

    // Peperoni
    <svg key="peperoni-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
      <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.6" />
    </svg>,

    // Oregano/Hierbas
    <svg key="herbs-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-11 h-11">
      <path d="M12 2v12M8 8h8M6 12h12M9 16h6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,

    // Cuchillo y Tenedor
    <svg key="utensils-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-13 h-13">
      <path d="M3 2v14c0 1 1 2 2 2h2c1 0 2-1 2-2V2M17 2v14c0 1 1 2 2 2h2c1 0 2-1 2-2V2M9 6h6M9 10h6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>,

    // Fuego
    <svg key="fire-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path d="M8 14c0-3 2-6 4-8 2 2 4 5 4 8 0 2-1 4-4 4-3 0-4-2-4-4z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,

    // Corazón
    <svg key="heart-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeWidth="1.5" />
    </svg>,

    // Estrella
    <svg key="star-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-11 h-11">
      <polygon points="12 2 15.09 10.26 24 10.26 17.55 15.74 19.64 24 12 19.52 4.36 24 6.45 15.74 0 10.26 8.91 10.26 12 2" strokeWidth="1.5" />
    </svg>,
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-6 gap-8 opacity-8 text-primary/15">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            {icons[i % icons.length]}
          </div>
        ))}
      </div>
    </div>
  );
}
