"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Code, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Sitios web responsivos y aplicaciones web modernas que ofrecen una experiencia de usuario excepcional y alta performance.",
  },
  {
    icon: Smartphone,
    title: "Desarrollo de Aplicaciones Móviles",
    description:
      "Apps nativas e híbridas para iOS y Android que conectan con tus usuarios de manera efectiva.",
  },
  {
    icon: Code,
    title: "Desarrollo de Software a Medida",
    description:
      "Soluciones personalizadas diseñadas específicamente para satisfacer las necesidades únicas de tu negocio.",
  },
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ofrecemos una gama completa de servicios de desarrollo para llevar
            tu proyecto desde la idea hasta el lanzamiento y más allá.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
            >
              <CardHeader className="w-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg  mx-auto flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={scrollToContact} className="group">
            Solicitar consulta gratuita
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
