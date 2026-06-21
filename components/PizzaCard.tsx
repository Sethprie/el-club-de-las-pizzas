'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pizza, ChevronRight } from 'lucide-react';

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
      {/* Card Premium */}
      <div className="group bg-card hover:bg-muted border border-border/60 hover:border-primary/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <div className="flex flex-col sm:flex-row">
          {/* Imagen */}
          <div
            className="relative flex-shrink-0 w-full sm:w-32 sm:h-32 bg-muted cursor-pointer overflow-hidden"
            onClick={() => image && setIsModalOpen(true)}
          >
            {/* Móvil: 4:3 */}
            <div className="block sm:hidden w-full" style={{ paddingBottom: '75%' }}>
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <Pizza className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-muted-foreground/30" />
              )}
            </div>

            {/* Desktop: cuadrado fijo */}
            <div className="hidden sm:block w-32 h-32 relative">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <Pizza className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-muted-foreground/30" />
              )}
            </div>
          </div>

          {/* Contenido */}
          <div className="flex flex-col flex-1 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
            
            {description && (
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                {description}
              </p>
            )}

            {/* Footer con precio y botón */}
            <div className="flex items-center justify-between pt-4 border-t border-border/40">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">Precio</span>
                <span className="text-2xl font-bold text-primary">
                  ${priceUSD.toFixed(2)}
                </span>
              </div>

              <Link
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 hover:bg-primary/90 active:scale-95 transition-all duration-200 text-sm rounded-lg group/btn"
                href="/#contact"
              >
                Ordenar
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && image && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors text-lg font-bold z-10 p-2"
              onClick={() => setIsModalOpen(false)}
              aria-label="Cerrar"
            >
              ✕
            </button>
            <Image
              src={image}
              alt={name}
              width={800}
              height={600}
              className="object-contain max-w-full max-h-[85vh] rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
