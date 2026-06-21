'use client';

import { MessageCircle, CreditCard, Copy } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const whatsappMessage = encodeURIComponent('¡Hola! Quisiera hacer un pedido de pizza');
  const whatsappNumber = '584122557840';

  const pagoMovilData = `Mercantil
04122557840
15985792`;

  const zelleData = `javierjprietop2@gmail.com
Javier Prieto`;

  const [copied, setCopied] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [key]: true });
    setTimeout(() => setCopied({ ...copied, [key]: false }), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Contacto</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Cómo Ordenar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">Realiza tu pedido fácilmente a través de WhatsApp. Ofrecemos múltiples métodos de pago para tu conveniencia.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* WhatsApp Section */}
          <div className="group bg-card border border-border/60 hover:border-primary/40 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Por WhatsApp
              </h3>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Envía tu pedido directo a nuestro WhatsApp. Haz clic en el botón de abajo para iniciar la conversación con nuestro equipo.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Abrir WhatsApp
            </a>
          </div>

          {/* Payment Methods Section */}
          <div className="group bg-card border border-border/60 hover:border-secondary/40 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/10 group-hover:bg-secondary/20 rounded-lg transition-colors">
                <CreditCard className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Métodos de Pago
              </h3>
            </div>

            <div className="space-y-5">
              {/* Pago Móvil */}
              <div className="bg-background/50 hover:bg-background/80 transition-colors rounded-lg p-4 border border-border/40">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Pago Móvil
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-mono">
                  Mercantil • 0412-2557840 • 15985792
                </p>
                <button
                  onClick={() => handleCopy('pagoMovil', pagoMovilData)}
                  className="inline-flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200"
                >
                  <Copy className="w-4 h-4" /> 
                  <span>{copied['pagoMovil'] ? 'Copiado!' : 'Copiar datos'}</span>
                </button>
              </div>

              {/* Zelle */}
              <div className="bg-background/50 hover:bg-background/80 transition-colors rounded-lg p-4 border border-border/40">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Zelle (USD)
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-mono">
                  javierjprietop2@gmail.com • Javier Prieto
                </p>
                <button
                  onClick={() => handleCopy('zelle', zelleData)}
                  className="inline-flex items-center gap-2 bg-secondary/20 hover:bg-secondary/30 text-secondary px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200"
                >
                  <Copy className="w-4 h-4" /> 
                  <span>{copied['zelle'] ? 'Copiado!' : 'Copiar datos'}</span>
                </button>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-6 pt-6 border-t border-border/40">
              📋 Consulta la disponibilidad de tu pedido vía WhatsApp antes de realizar el pago.
            </p>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Tiempo de entrega:</span> Consulta disponibilidad directamente con nosotros
          </p>
        </div>
      </div>
    </section>
  );
}
