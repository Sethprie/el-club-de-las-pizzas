'use client';

import { useState, useEffect } from 'react';
import PizzaCard from './PizzaCard';

interface Pizza {
  id: number;
  name: string;
  description: string;
  priceVES: number;
}

const pizzas: Pizza[] = [
  {
    id: 1,
    name: 'Margherita Pura',
    description: 'Tomate, mozzarella fresca, albahaca y aceite de oliva premium',
    priceVES: 25000,
  },
  {
    id: 2,
    name: 'Pepperoni Fuego',
    description: 'Salsa de tomate, mozzarella y pepperoni artesanal',
    priceVES: 30000,
  },
  {
    id: 3,
    name: 'Cuatro Quesos',
    description: 'Mozzarella, parmesano, gorgonzola y queso azul',
    priceVES: 35000,
  },
  {
    id: 4,
    name: 'Verde Huerto',
    description: 'Champiñones, pimientos, cebolla, tomate y aceitunas',
    priceVES: 28000,
  },
  {
    id: 5,
    name: 'La Carnicera',
    description: 'Pepperoni, jamón, salchicha y bacon crujiente',
    priceVES: 38000,
  },
  {
    id: 6,
    name: 'BBQ Especial',
    description: 'Pollo BBQ, cebolla roja, cilantro y mozzarella',
    priceVES: 32000,
  },
];

export default function MenuGrid() {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/VES');
        const data = await response.json();
        setExchangeRate(data.rates.USD);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        setExchangeRate(0.000025);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Nuestro Menú</h2>
          <p className="text-muted-foreground">Pizzas artesanales preparadas con ingredientes premium</p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Cargando tasas de cambio...</p>
          </div>
        )}

        <div className="space-y-4">
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              name={pizza.name}
              description={pizza.description}
              priceVES={pizza.priceVES}
              priceUSD={exchangeRate ? pizza.priceVES * exchangeRate : null}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
