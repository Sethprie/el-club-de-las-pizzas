'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "#menu", label: "MENÚ" },
    { href: "#location", label: "UBICACIÓN" },
    { href: "#contact", label: "CONTACTO" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
          <span className="text-primary">El Club de</span>{" "}
          <span>las Pizzas</span>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 md:gap-10 text-sm md:text-base font-medium">
          {navItems.map((item) => (
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

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-primary/20 px-4 pb-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-primary text-lg font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
