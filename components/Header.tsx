import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          <span className="text-primary">El Club de</span>{" "}
          <span className="text-white">las Pizzas</span>
        </h1>

        {/* Nav */}
        <nav className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-medium">
          {[
            { href: "#menu", label: "MENÚ" },
            { href: "#location", label: "UBICACIÓN" },
            { href: "#contact", label: "CONTACTO" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative text-white/70
                hover:text-primary
                transition-colors duration-200
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-primary
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
