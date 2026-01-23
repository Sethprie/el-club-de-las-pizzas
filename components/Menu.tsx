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
    name: 'Margherita',
    description: 'Tomate, mozzarella fresca, albahaca y aceite de oliva',
    priceVES: 25000,
  },
  {
    id: 2,
    name: 'Pepperoni',
    description: 'Salsa de tomate, mozzarella y pepperoni',
    priceVES: 30000,
  },
  {
    id: 3,
    name: 'Cuatro Quesos',
    description: 'Mezcla de mozzarella, parmesano, gorgonzola y queso azul',
    priceVES: 35000,
  },
  {
    id: 4,
    name: 'Verduras del Huerto',
    description: 'Champiñones, pimientos, cebolla, tomate y aceitunas',
    priceVES: 28000,
  },
  {
    id: 5,
    name: 'La Carnicera',
    description: 'Pepperoni, jamón, salchicha y bacon',
    priceVES: 38000,
  },
  {
    id: 6,
    name: 'BBQ Especial',
    description: 'Pollo BBQ, cebolla roja, cilantro y queso mozzarella',
    priceVES: 32000,
  },
];

export default function Menu() {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        // Using exchangerate-api.com free tier
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/VES');
        const data = await response.json();
        setExchangeRate(data.rates.USD);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        // Fallback rate if API fails
        setExchangeRate(0.000025);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  return (
    <section id="menu" className="py-20 bg-accent">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Nuestro Menú
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Pizzas hechas al horno de leña con ingredientes premium
        </p>

        {loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Cargando tasas de cambio...</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
