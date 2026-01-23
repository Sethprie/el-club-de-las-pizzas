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
    <section id="menu" className="py-20 bg-accent">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Nuestro Menú
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Pizzas hechas al horno de leña con ingredientes premium
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
}
