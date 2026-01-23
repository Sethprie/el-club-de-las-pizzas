'use client';

export default function Contact() {
  const whatsappMessage = encodeURIComponent('¡Hola! Quisiera hacer un pedido de pizza');
  const whatsappNumber = '584121234567';

  return (
    <section id="contact" className="py-20 md:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Cómo Ordenar</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* WhatsApp Section */}
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Por WhatsApp
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Envía tu pedido directo a nuestro WhatsApp. Haz clic en el botón de abajo para iniciar la conversación.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-background font-bold py-3 px-8 border border-primary hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 tracking-wide"
            >
              Abrir WhatsApp
            </a>
          </div>

          {/* Payment Methods Section */}
          <div className="border-l-4 border-secondary pl-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Métodos de Pago
            </h3>

            <div className="space-y-6">
              {/* Pago Móvil */}
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold text-foreground mb-1">Pago Móvil</h4>
                <p className="text-xs text-muted-foreground mb-1">Banco: Mercantil</p>
                <p className="text-xs text-muted-foreground mb-1">Teléfono: 0412-1234567</p>
                <p className="text-xs text-muted-foreground">Cédula: V-12345678</p>
              </div>

              {/* Zelle */}
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold text-foreground mb-1">Zelle (USD)</h4>
                <p className="text-xs text-muted-foreground mb-1">Email: pizzeria@email.com</p>
                <p className="text-xs text-muted-foreground">Transferencias internacionales</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-8 pt-6 border-t border-primary/20">
              Consulta la disponibilidad de tu pedido vía WhatsApp antes de realizar el pago.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
