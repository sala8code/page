"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/fondo2.mp4" type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>

      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Transformamos tus{" "}
            <span className="text-primary relative">ideas digitales</span> en
            realidad
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
            Somos una agencia de desarrollo especializada en crear soluciones
            web y móviles innovadoras que impulsan el crecimiento de tu negocio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-[250px] mx-auto">
            {/* Botón principal */}
            <Button
              size="lg"
              onClick={() => scrollToSection("proyectos")}
              className="group relative overflow-hidden px-6 py-3 font-semibold rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 text-white hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Ver nuestros proyectos
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </span>
              <span className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </Button>

            {/* Botón secundario */}
            <Button
              size="lg"
              onClick={() => scrollToSection("contacto")}
              className="relative px-6 py-3 font-semibold rounded-xl shadow-md w-full cursor-pointer sm:w-auto text-black bg-white border-2 hover:bg-primary hover:text-white transition-all hover:scale-105"
            >
              Solicitar cotización
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
