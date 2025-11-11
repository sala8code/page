import { Card, CardContent } from "@/components/ui/card";

import Link from "next/link";
import projects from "@/projects.json";

export function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Nuestros <span className="text-primary">Trabajos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Conoce algunos de los trabajos que hemos realizado para nuestros
            clientes, mostrando nuestra experiencia y compromiso con la calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {projects.map((project, index) => (
            <a
              className="h-full flex"
              href={project.link}
              target="_blank"
              key={index}
            >
              <Card className="bg-zinc-900 group overflow-hidden hover:shadow-xl transition-all duration-300   cursor-pointer p-0 shadow-none">
                <div className="relative overflow-hidden ">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pb-4 ">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </a>
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
