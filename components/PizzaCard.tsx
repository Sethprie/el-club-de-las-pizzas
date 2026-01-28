'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Pizza } from 'lucide-react';

interface PizzaCardProps {
  name: string;
  description: string;
  priceUSD: number;
  image?: string;
}

export default function PizzaCard({ name, description, priceUSD, image }: PizzaCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row gap-4 hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
      
      {/* Imagen */}
      <div className="flex-shrink-0 w-full sm:w-28 h-28 sm:h-28 bg-muted border border-border rounded-lg flex items-center justify-center overflow-hidden">
        {image ? (
          <Image src={image} alt={name} width={112} height={112} className="w-full h-full object-cover" />
        ) : (
          <Pizza className="w-10 h-10 text-secondary" />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-foreground">{name}</h3>
          <p className="text-sm md:text-base text-muted-foreground mt-1 line-clamp-2 sm:line-clamp-none">
            {description}
          </p>
        </div>

        {/* Precio + botón */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
          <div className="text-xl font-bold text-secondary">${priceUSD.toFixed(2)}</div>
          <Link
            href="/#contact"
            className="bg-primary text-primary-foreground font-semibold px-6 py-2 hover:bg-primary/90 transition-all duration-200 text-sm text-center rounded-lg"
          >
            Ordenar
          </Link>
        </div>
      </div>
    </div>
  );
}
