'use client';

import PizzaCard from './PizzaCard';
import { ChefHat, Crown, Star } from 'lucide-react';

interface Pizza {
  id: number;
  name: string;
  description?: string;
  priceUSD: number;
  section: string; // Nueva propiedad para dividir secciones
  image?: string;
}

const pizzas: Pizza[] = [
  // Sección: Pizzas Gourmet
  {
    id: 1,
    name: 'Pizza de la casa',
    description: 'Salchichón, jalapeños, peperoni, aceitunas negras, tomates secos, cebolla caramelizada, pesto y queso mozzarella extra',
    priceUSD: 10,
    section: 'Gourmet',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'La Italiana',
    description: 'Salsa boloñesa de la casa, peperoni, tomate seco, parmesano',
    priceUSD: 9,
    section: 'Gourmet',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Carbonara',
    description: 'Salsa carbonara especial de la casa, tocineta, tomate seco, maíz',
    priceUSD: 9,
    section: 'Gourmet',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'La Llanera',
    description: 'Carne mechada; cebolla, pimentón y maíz salteados; maduro',
    priceUSD: 9,
    section: 'Gourmet',
  },
  {
    id: 5,
    name: 'La Mediterránea',
    description: 'Carne sazonada al estilo mediterráneo, champiñones, tocineta, cebolla en grillé, queso holandés y parmesano',
    priceUSD: 9,
    section: 'Gourmet',
  },
  {
    id: 6,
    name: 'La Española',
    description: 'Chorizo español, peperoni, lomo ahumado, pimentón, tomate seco, aceitunas negras',
    priceUSD: 9,
    section: 'Gourmet',
  },
  {
    id: 7,
    name: 'La Mexicana',
    description: 'Carne molida sazonada al estilo mexicano, guacamole, pico de gallo',
    priceUSD: 9,
    section: 'Gourmet',
  },
  {
    id: 8,
    name: 'Miel Mostaza',
    description: 'Miel mostaza de la casa, pollo asado en juliana, tocineta en grillé',
    priceUSD: 9,
    section: 'Gourmet',
  },
  {
    id: 9,
    name: '5 Quesos',
    description: 'Mozarella, holandés, parmesano, queso crema y pecorino',
    priceUSD: 9,
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

export default function MenuGrid() {
  let currentSection = '';

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Nuestro Menú</h2>
          <p className="text-muted-foreground">Pizzas artesanales preparadas con ingredientes premium</p>
        </div>

        <div className="space-y-6">
          {pizzas.map((pizza) => {
            const showSection = pizza.section !== currentSection;
            currentSection = pizza.section;

            return (
              <div key={pizza.id}>
                {showSection && (
                  <div className="flex items-center gap-3 mb-2 mt-6">
                    {pizza.section === 'Gourmet' && <Crown className="w-8 h-8 text-primary" />}
                    {pizza.section === 'Extraordinarias' && <Star className="w-8 h-8 text-primary" />}
                    {pizza.section === 'Clásicas' && <ChefHat className="w-8 h-8 text-primary" />}
                    <h3 className="text-2xl font-bold text-primary">{pizza.section}</h3>
                  </div>
                )}
                {pizza.section === 'Clásicas' ? (
                  showSection && (
                    <div className="border border-border rounded-lg p-6 bg-card">
                      <p className="text-foreground text-lg">
                        Todas las pizzas clásicas valen <span className="font-bold text-primary">$6 USD</span>
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Pizzas de ingredientes comunes como: Jamón, Tocineta, Peperoni, Maíz, Pimentón, Maduro, Aceitunas negras, Pollo
                      </p>
                    </div>
                  )
                ) : (
                  <PizzaCard
                    name={pizza.name}
                    description={pizza.description ?? ''}
                    priceUSD={pizza.priceUSD}
                    image={pizza.image}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
