'use client';

import PizzaCard from './PizzaCard';
import BackgroundPattern from './BackgroundPattern';
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
    description: 'Pizza profunda y jugosa al estilo Chicago con capas de queso, salsa y carnes premium',
    priceUSD: 12,
    section: 'Gourmet',
    image: '/pizzas/Chicago.jpeg',
  },
  {
    id: 22,
    name: 'Detroit',
    description: 'Icónica pizza rectangular de Detroit con queso crujiente en los bordes y salsa clásica',
    priceUSD: 12,
    section: 'Gourmet',
    image: '/pizzas/Detroit.jpeg',
  },
  {
    id: 1,
    name: 'Pizza de la casa',
    description: 'Nuestra creación estrella: salchichón, jalapeños, peperoni, aceitunas negras, tomates secos, cebolla caramelizada y mozzarella extra',
    priceUSD: 11,
    section: 'Gourmet',
    image: '/pizzas/Pizza_de_la_Casa.jpeg',
  },
  {
    id: 2,
    name: 'La Italiana',
    description: 'Auténtica receta italiana: salsa boloñesa de la casa, peperoni, tomate seco y parmesano rallado',
    priceUSD: 10,
    section: 'Gourmet',
  },
  {
    id: 3,
    name: 'Carbonara',
    description: 'Inspirada en la clásica romana: salsa carbonara especial, tocineta crujiente, tomate seco y maíz',
    priceUSD: 10,
    section: 'Gourmet',
    image: '/pizzas/pizza_carbonara.png',
  },
  {
    id: 4,
    name: 'La Llanera',
    description: 'Tradición venezolana: carne mechada, cebolla y pimentón salteados, maduro caramelizado',
    priceUSD: 10,
    section: 'Gourmet',
    image: '/pizzas/La_Llanera.jpeg',
  },
  {
    id: 5,
    name: 'La Mediterránea',
    description: 'Carne sazonada al estilo mediterráneo con champiñones, tocineta, cebolla a la parrilla y dos quesos',
    priceUSD: 10,
    section: 'Gourmet',
  },
  {
    id: 6,
    name: 'La Española',
    description: 'Sabores de España: chorizo español, peperoni, lomo ahumado, pimentón, tomate seco y aceitunas',
    priceUSD: 10,
    section: 'Gourmet',
  },
  {
    id: 7,
    name: 'La Mexicana',
    description: 'Toque mexicano: carne molida sazonada, guacamole fresco, pico de gallo y jalapeños',
    priceUSD: 10,
    section: 'Gourmet',
    image: '/pizzas/Mexicana_Pollo.jpeg',
  },
  {
    id: 8,
    name: 'Miel Mostaza',
    description: 'Combinación dulce y salada: miel mostaza casera, pollo asado tierno, tocineta crujiente',
    priceUSD: 10,
    section: 'Gourmet',
    image: '/pizzas/Miel_Mostaza.jpeg',
  },
  {
    id: 9,
    name: '5 Quesos',
    description: 'Paraíso del queso: mozzarella, holandés, parmesano, queso crema y pecorino italiano',
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
    description: 'Jamón premium con salsa y mozzarella fresca',
    priceUSD: 6,
    section: 'Clásicas',
    image: '/pizzas/pizza_clasica.png',
  },
  {
    id: 14,
    name: 'Tocineta',
    description: 'Tocineta crujiente con queso mozzarella derretido',
    priceUSD: 6,
    section: 'Clásicas',
    image: '/pizzas/pizza_clasica.png',
  },
  {
    id: 15,
    name: 'Peperoni',
    description: 'Clásico peperoni italiano con queso fundido',
    priceUSD: 6,
    section: 'Clásicas',
    image: '/pizzas/pizza_clasica.png',
  },
  {
    id: 16,
    name: 'Maíz',
    description: 'Maíz fresco y tierno con salsa de tomate casera',
    priceUSD: 6,
    section: 'Clásicas',
    image: '/pizzas/pizza_clasica.png',
  },
  {
    id: 17,
    name: 'Pimentón',
    description: 'Pimentón rojo salteado con salsa y queso',
    priceUSD: 6,
    section: 'Clásicas',
    image: '/pizzas/pizza_clasica.png',
  },
  {
    id: 18,
    name: 'Maduro',
    description: 'Maduro caramelizado con salsa y mozzarella',
    priceUSD: 6,
    section: 'Clásicas',
    image: '/pizzas/pizza_clasica.png',
  },
  {
    id: 19,
    name: 'Aceitunas negras',
    description: 'Aceitunas negras del Mediterráneo con queso',
    priceUSD: 6,
    section: 'Clásicas',
    image: '/pizzas/pizza_clasica.png',
  },
  {
    id: 20,
    name: 'Pollo',
    description: 'Pollo tierno con salsa y mozzarella fresca',
    priceUSD: 6,
    section: 'Clásicas',
    image: '/pizzas/pizza_clasica.png',
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
    <section id="menu" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <BackgroundPattern />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nuestras Creaciones</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Nuestro Menú</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">Pizzas artesanales preparadas con ingredientes premium. Cada pizza es una experiencia única diseñada para deleitar tu paladar.</p>
        </div>

        <div className="space-y-20">
          {Object.entries(groupedPizzas).map(([section, sectionPizzas]) => {
            const Icon = sectionIcons[section as keyof typeof sectionIcons];
            return (
              <div key={section}>
                {/* Section Header */}
                <div className="mb-10 pb-6 border-b border-primary/20">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground">{section}</h3>
                      {section === 'Gourmet' && (
                        <p className="text-sm text-muted-foreground mt-1">Selecciones premium con sabores gourmet</p>
                      )}
                      {section === 'Extraordinarias' && (
                        <p className="text-sm text-muted-foreground mt-1">Combinaciones especiales y personalizables</p>
                      )}
                      {section === 'Clásicas' && (
                        <p className="text-sm text-muted-foreground mt-1">Lo mejor de los clásicos pizzeros</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cards Grid */}
                {section === 'Clásicas' ? (
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-8 mb-6">
                    <div className="max-w-2xl">
                      <h4 className="text-xl font-bold text-foreground mb-3">Pizzas Clásicas</h4>
                      <p className="text-foreground text-base mb-4">
                        Todas las pizzas clásicas valen <span className="font-bold text-primary text-lg">$6 USD</span>
                      </p>
                      <p className="text-muted-foreground">
                        Jamón • Tocineta • Peperoni • Maíz • Pimentón • Maduro • Aceitunas negras • Pollo
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectionPizzas.map((pizza) => (
                      <PizzaCard
                        key={pizza.id}
                        name={pizza.name}
                        description={pizza.description ?? ''}
                        priceUSD={pizza.priceUSD}
                        image={pizza.image}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
