"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Sala8Code</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          <div className="hidden md:flex">
            <Button onClick={() => scrollToSection("contacto")}>Hablemos</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
