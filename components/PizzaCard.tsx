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
    <div className="flex gap-4 py-4 border-b border-border px-4 -mx-4">
      <div className="flex-shrink-0 w-24 h-24 bg-muted border border-border flex items-center justify-center">
        {image ? (
          <Image src={image} alt={name} width={96} height={96} className="w-full h-full object-cover" />
        ) : (
          <Pizza className="w-8 h-8 text-secondary" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>

        <div className="flex items-center gap-4 mt-3">
          <div className="text-xl font-bold text-secondary">${priceUSD.toFixed(2)}</div>
        </div>
      </div>

      <Link
        className="flex-shrink-0 bg-primary text-primary-foreground font-semibold px-6 py-2 hover:bg-primary/90 transition-all duration-200 text-sm whitespace-nowrap h-fit"
        href="/#contact"
      >
        Ordenar
      </Link>
    </div>
  );
}
