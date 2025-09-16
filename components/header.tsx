"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // cierra el menú cuando clickeas un link
  };

  // Solo controla el scroll para cambiar estilos
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll(); // fuerza el cálculo inicial
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // dependencia vacía, se ejecuta solo al montar

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Línea azul solo cuando se hace scroll */}
      <div
        className={`absolute bottom-0 left-0 w-full transition-all duration-300 ${
          scrolled
            ? "h-[3px] bg-gradient-to-r from-transparent via-[#29A9E0] to-transparent opacity-100"
            : "hidden"
        }`}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="w-auto h-12 sm:h-14 md:h-16 max-w-[120px] object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["inicio", "servicios", "nosotros", "proyectos", "contacto"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors cursor-pointer font-semibold whitespace-nowrap ${
                    scrolled
                      ? "text-gray-900 hover:text-[#29A9E0]"
                      : "text-white hover:text-[#29A9E0]"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </nav>

          {/* Botón menú hamburguesa */}
          <div className="md:hidden border border-gray-300 rounded-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-10 w-10"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 w-64 sm:w-72 max-w-[80vw] h-screen bg-white backdrop-blur-md rounded-l-lg shadow-lg z-50 transition-transform duration-300">
            <div className="flex justify-end px-4 py-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="h-10 w-10"
              >
                <X className="h-6 w-6 text-black" />
              </Button>
            </div>

            <div className="px-6 py-4 flex flex-col justify-start space-y-4">
              {["inicio", "nosotros", "servicios", "proyectos", "contacto"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block px-3 py-3 text-base font-medium w-full text-left text-black hover:text-primary transition-colors rounded-md hover:bg-gray-100"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
