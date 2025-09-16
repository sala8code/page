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
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      if (isMenuOpen) {
        setIsMenuOpen(false); // Cierra el menú si se hace scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* Borde inferior con degradado */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#29A9E0] to-transparent"></div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["inicio", "servicios", "nosotros", "proyectos", "contacto"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors cursor-pointer font-semibold ${
                    scrolled
                      ? "text-black hover:text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-10 w-10 text-white" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 w-1/2 h-screen bg-background/80 backdrop-blur-md rounded-l-lg shadow-lg z-50 transition-transform duration-300">
            {/* Botón de cierre en la esquina superior */}
            <div className="flex justify-end px-4 py-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
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
                    className="block px-3 py-3 text-base font-medium w-full text-left text-black hover:text-primary transition-colors"
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
