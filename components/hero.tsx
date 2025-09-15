"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Transformamos tus <span className="text-primary">ideas digitales</span> en realidad
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Somos una agencia de desarrollo especializada en crear soluciones web y móviles innovadoras que impulsan el
            crecimiento de tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection("proyectos")} className="group">
              Ver nuestros proyectos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contacto")}>
              Solicitar cotización
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
