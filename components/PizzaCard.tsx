'use client';

import { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="flex flex-col sm:flex-row gap-4 py-4 border-b border-border px-4 -mx-4">
        {/* Imagen */}
        <div
          className="relative flex-shrink-0 w-full sm:w-24 sm:h-24 bg-muted border border-border rounded-lg cursor-pointer overflow-hidden"
          onClick={() => image && setIsModalOpen(true)}
        >
          {/* Móvil: 4:3 */}
          <div className="block sm:hidden w-full" style={{ paddingBottom: '75%' }}>
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            ) : (
              <Pizza className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-secondary" />
            )}
          </div>

          {/* Escritorio: cuadrado fijo */}
          <div className="hidden sm:block w-24 h-24 relative">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            ) : (
              <Pizza className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-secondary" />
            )}
          </div>
        </div>

        {/* Contenido */}
        <div className="flex-1 min-w-0 mt-4 sm:mt-0">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>

          <div className="flex items-center gap-4 mt-3">
            <div className="text-xl font-bold text-secondary">${priceUSD.toFixed(2)}</div>
          </div>
        </div>

        {/* Botón Ordenar */}
        <Link
          className="flex-shrink-0 bg-primary text-primary-foreground font-semibold px-6 py-2 hover:bg-primary/90 transition-all duration-200 text-sm whitespace-nowrap h-fit mt-4 sm:mt-0"
          href="/#contact"
        >
          Ordenar
        </Link>
      </div>

      {/* Modal */}
      {isModalOpen && image && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <Image
              src={image}
              alt={name}
              width={800}
              height={600}
              className="object-contain max-w-full max-h-[90vh] rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
}
