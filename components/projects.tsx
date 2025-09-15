import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "EcoShop - E-commerce Sustentable",
    description:
      "Plataforma de comercio electrónico especializada en productos ecológicos con sistema de puntos de fidelidad.",
    image: "/modern-ecommerce-website-green-theme.jpg",
    category: "E-commerce",
    link: "#",
    github: "#",
  },
  {
    title: "MediCare - App de Salud",
    description:
      "Aplicación móvil para gestión de citas médicas, historial clínico y telemedicina.",
    image: "/healthcare-mobile-app.png",
    category: "Salud",
    link: "#",
    github: "#",
  },
  {
    title: "EduPlatform - LMS",
    description:
      "Sistema de gestión de aprendizaje con videoconferencias, evaluaciones y seguimiento de progreso.",
    image: "/online-learning-dashboard.png",
    category: "Educación",
    link: "#",
    github: "#",
  },
  {
    title: "FinTracker - Finanzas Personales",
    description:
      "Aplicación web para el seguimiento de gastos personales con análisis inteligente y reportes.",
    image: "/financial-dashboard-charts.png",
    category: "Finanzas",
    link: "#",
    github: "#",
  },
  {
    title: "RestaurantPOS - Sistema de Ventas",
    description:
      "Sistema punto de venta para restaurantes con gestión de mesas, inventario y reportes.",
    image: "/restaurant-pos-system-interface.jpg",
    category: "Retail",
    link: "#",
    github: "#",
  },
  {
    title: "TravelBuddy - App de Viajes",
    description:
      "Aplicación móvil para planificación de viajes con recomendaciones personalizadas y mapas offline.",
    image: "/travel-planning-app.png",
    category: "Viajes",
    link: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Nuestros <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explora algunos de nuestros proyectos más destacados que demuestran
            nuestra experiencia y compromiso con la calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link className="h-full flex" href={project.link} key={index}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-transparent border-gray-200 cursor-pointer p-0 shadow-none">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pb-4">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver todos los proyectos
          </Button>
        </div> */}
      </div>
    </section>
  );
}
