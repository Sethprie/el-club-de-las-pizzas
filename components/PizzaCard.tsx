'use client';

import { useState } from 'react';
import { Pizza } from 'lucide-react';

export interface PizzaCardProps {
  name: string;
  description: string;
  priceUSD: number;
  image?: string;
}

export default function PizzaCard({ name, description, priceUSD, image }: PizzaCardProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex gap-4 py-4 border-b border-border px-4 -mx-4">
      <div className="flex-shrink-0 w-24 h-24 bg-muted border border-border flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setShowModal(true)}
          />
        ) : (
          <div className="text-center">
            <Pizza className="w-8 h-8 text-secondary" />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-foreground">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-4 mt-3">
          <div className="text-xl font-bold text-secondary">
            ${priceUSD.toFixed(2)}
          </div>
        </div>
      </div>

      <a
        className="flex-shrink-0 bg-primary text-primary-foreground font-semibold px-6 py-2 hover:bg-primary/90 transition-all duration-200 text-sm whitespace-nowrap h-fit"
        href="/#contact"
      >
        Ordenar
      </a>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <img src={image} alt={name} className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
