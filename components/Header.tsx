'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "#menu", label: "MENÚ" },
    { href: "#location", label: "UBICACIÓN" },
    { href: "#contact", label: "CONTACTO" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Logo + Branding */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
        >
          <div className="relative p-2 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg">
            <Image 
              src="/Logo-LineArt_Blanco.png" 
              alt="Logo El Club de las Pizzas"
              width={40}
              height={40}
              className="object-contain filter brightness-0 invert"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-foreground">
              <span className="text-primary">El Club</span>
              <span className="hidden md:inline"> de las Pizzas</span>
            </h1>
            <p className="text-xs text-muted-foreground font-medium">Pizzería Artesanal</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative px-4 py-2 text-sm font-semibold
                text-muted-foreground
                hover:text-primary
                transition-all duration-300
                rounded-lg
                hover:bg-primary/5
                after:absolute after:bottom-0 after:left-4 after:right-4
                after:h-0.5 after:bg-primary
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300
                hover:after:scale-x-100
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground hover:bg-primary/10 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-t border-primary/10 px-4 pb-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 text-base font-semibold rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
