export interface PizzaCardProps {
  name: string;
  description: string;
  priceVES: number;
  priceUSD: number | null;
}

export default function PizzaCard({ name, description, priceVES, priceUSD }: PizzaCardProps) {
  return (
    <div className="group flex gap-4 py-4 border-b border-border hover:bg-muted/30 px-4 -mx-4 transition-colors duration-200 cursor-pointer">
      <div className="flex-shrink-0 w-24 h-24 bg-muted border border-border flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-secondary">P</div>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-secondary">
              {(priceVES / 1000).toFixed(0)}K
            </span>
            <span className="text-xs text-muted-foreground">VES</span>
            {priceUSD && (
              <>
                <span className="text-muted-foreground mx-1">·</span>
                <span className="text-sm text-muted-foreground">
                  ${priceUSD.toFixed(2)}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <a
        className="flex-shrink-0 bg-primary text-primary-foreground font-semibold px-6 py-2 hover:bg-primary/90 transition-all duration-200 text-sm whitespace-nowrap h-fit"
        href="/#contact"
      >
        Ordenar
      </a>
    </div>
  );
}
