'use client';

import PizzaCard from './PizzaCard';
import { ChefHat, Crown, Star } from 'lucide-react';

interface Pizza {
  id: number;
  name: string;
  description?: string;
  priceUSD: number;
  section: string;
  image?: string;
}

const pizzas: Pizza[] = [
  // Sección: Pizzas Gourmet
  {
    id: 21,
    name: 'Chicago',
    priceUSD: 7,
    section: 'Gourmet',
    image: '/pizzas/Chicago.jpeg',
  },
  {
    id: 22,
    name: 'Detroit',
    priceUSD: 12,
    section: 'Gourmet',
    image: '/pizzas/Detroit.jpeg',
  },
  {
    id: 1,
    name: 'Pizza de la casa',
    description: 'Salchichón, jalapeños, peperoni, aceitunas negras, tomates secos, cebolla caramelizada, pesto y queso mozzarella extra',
    priceUSD: 11,
    section: 'Gourmet',
    image: '/pizzas/Pizza_de_la_Casa.jpeg',
  },
  {
    id: 2,
    name: 'La Italiana',
    description: 'Salsa boloñesa de la casa, peperoni, tomate seco, parmesano',
    priceUSD: 10,
    section: 'Gourmet',
  },
  {
    id: 3,
    name: 'Carbonara',
    description: 'Salsa carbonara especial de la casa, tocineta, tomate seco, maíz',
    priceUSD: 10,
    section: 'Gourmet',
  },
  {
    id: 4,
    name: 'La Llanera',
    description: 'Carne mechada; cebolla, pimentón y maíz salteados; maduro',
    priceUSD: 10,
    section: 'Gourmet',
    image: '/pizzas/La_Llanera.jpeg',
  },
  {
    id: 5,
    name: 'La Mediterránea',
    description: 'Carne sazonada al estilo mediterráneo, champiñones, tocineta, cebolla en grillé, queso holandés y parmesano',
    priceUSD: 10,
    section: 'Gourmet',
  },
  {
    id: 6,
    name: 'La Española',
    description: 'Chorizo español, peperoni, lomo ahumado, pimentón, tomate seco, aceitunas negras',
    priceUSD: 10,
    section: 'Gourmet',
  },
  {
    id: 7,
    name: 'La Mexicana',
    description: 'Carne molida sazonada al estilo mexicano, guacamole, pico de gallo',
    priceUSD: 10,
    section: 'Gourmet',
    image: '/pizzas/Mexicana_Pollo.jpeg',
  },
  {
    id: 8,
    name: 'Miel Mostaza',
    description: 'Miel mostaza de la casa, pollo asado en juliana, tocineta en grillé',
    priceUSD: 10,
    section: 'Gourmet',
    image: '/pizzas/Miel_Mostaza.jpeg',
  },
  {
    id: 9,
    name: '5 Quesos',
    description: 'Mozarella, holandés, parmesano, queso crema y pecorino',
    priceUSD: 10,
    section: 'Gourmet',
  },

  // Sección: Pizzas Extraordinarias
  {
    id: 10,
    name: 'La Caprichosa',
    description: 'Maíz, cebolla, pimentón salteado y una proteína a elección',
    priceUSD: 7,
    section: 'Extraordinarias',
  },
  {
    id: 11,
    name: '4 Estaciones',
    description: '4 secciones con ingredientes al gusto del cliente',
    priceUSD: 7,
    section: 'Extraordinarias',
  },
  {
    id: 12,
    name: 'Pizza de pollo especial',
    description: 'Pollo y 1 ingrediente al gusto del cliente',
    priceUSD: 7,
    section: 'Extraordinarias',
    image: '/pizzas/Pollo_Mexicana.jpeg',
  },

  // Sección: Pizzas Clásicas
  {
    id: 13,
    name: 'Jamón',
    priceUSD: 6,
    section: 'Clásicas',
  },
  {
    id: 14,
    name: 'Tocineta',
    priceUSD: 6,
    section: 'Clásicas',
  },
  {
    id: 15,
    name: 'Peperoni',
    priceUSD: 6,
    section: 'Clásicas',
  },
  {
    id: 16,
    name: 'Maíz',
    priceUSD: 6,
    section: 'Clásicas',
  },
  {
    id: 17,
    name: 'Pimentón',
    priceUSD: 6,
    section: 'Clásicas',
  },
  {
    id: 18,
    name: 'Maduro',
    priceUSD: 6,
    section: 'Clásicas',
  },
  {
    id: 19,
    name: 'Aceitunas negras',
    priceUSD: 6,
    section: 'Clásicas',
  },
  {
    id: 20,
    name: 'Pollo',
    priceUSD: 6,
    section: 'Clásicas',
  },
];

const sectionIcons = {
  Gourmet: Crown,
  Extraordinarias: Star,
  Clásicas: ChefHat,
};

export default function MenuGrid() {
  const groupedPizzas = pizzas.reduce((acc, pizza) => {
    if (!acc[pizza.section]) acc[pizza.section] = [];
    acc[pizza.section].push(pizza);
    return acc;
  }, {} as Record<string, Pizza[]>);

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Nuestro Menú</h2>
          <p className="text-muted-foreground">Pizzas artesanales preparadas con ingredientes premium</p>
        </div>

        <div className="space-y-6">
          {Object.entries(groupedPizzas).map(([section, sectionPizzas]) => {
            const Icon = sectionIcons[section as keyof typeof sectionIcons];
            return (
              <div key={section}>
                <div className="flex items-center gap-3 mb-4 mt-6">
                  <Icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">{section}</h3>
                </div>
                {section === 'Clásicas' ? (
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <p className="text-foreground text-lg">
                      Todas las pizzas clásicas valen <span className="font-bold text-primary">$7 USD</span>
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Pizzas de ingredientes comunes como: Jamón, Tocineta, Peperoni, Maíz, Pimentón, Maduro, Aceitunas negras, Pollo
                    </p>
                  </div>
                ) : (
                  sectionPizzas.map((pizza) => (
                    <PizzaCard
                      key={pizza.id}
                      name={pizza.name}
                      description={pizza.description ?? ''}
                      priceUSD={pizza.priceUSD}
                      image={pizza.image}
                    />
                  ))
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
