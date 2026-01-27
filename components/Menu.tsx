'use client';

import PizzaCard from './PizzaCard';

interface Pizza {
  id: number;
  name: string;
  description: string;
  priceUSD: number;
}

const pizzas: Pizza[] = [
  {
    id: 1,
    name: 'Margherita',
    description: 'Tomate, mozzarella fresca, albahaca y aceite de oliva',
    priceUSD: 7.5,
  },
  {
    id: 2,
    name: 'Pepperoni',
    description: 'Salsa de tomate, mozzarella y pepperoni',
    priceUSD: 9,
  },
  {
    id: 3,
    name: 'Cuatro Quesos',
    description: 'Mezcla de mozzarella, parmesano, gorgonzola y queso azul',
    priceUSD: 10.5,
  },
  {
    id: 4,
    name: 'Verduras del Huerto',
    description: 'Champiñones, pimientos, cebolla, tomate y aceitunas',
    priceUSD: 8,
  },
  {
    id: 5,
    name: 'La Carnicera',
    description: 'Pepperoni, jamón, salchicha y bacon',
    priceUSD: 11,
  },
  {
    id: 6,
    name: 'BBQ Especial',
    description: 'Pollo BBQ, cebolla roja, cilantro y queso mozzarella',
    priceUSD: 9.5,
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative py-28 bg-background border-b border-primary/20 overflow-hidden"
    >
      {/* Glow ambiental */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Nuestro <span className="text-primary">Menú</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pizzas hechas al horno de leña con ingredientes premium
          </p>

          <div className="mt-6 flex justify-center">
            <div className="w-20 h-[2px] bg-primary/60 rounded-full" />
          </div>
        </div>

        {/* Carta */}
        <div className="relative rounded-2xl bg-card/80 backdrop-blur-md border border-border p-6 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pizzas.map((pizza) => (
              <PizzaCard
                key={pizza.id}
                name={pizza.name}
                description={pizza.description}
                priceUSD={pizza.priceUSD}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
