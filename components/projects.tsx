import { Card, CardContent } from "@/components/ui/card";

import Link from "next/link";
import projects from "@/projects.json";
import { Plus } from "lucide-react";

export function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
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
          {/* Invitation Card */}
          <div className="group bg-zinc-900/50 rounded-3xl overflow-hidden border border-dashed border-cyan-500 shadow-2xl flex flex-col items-center justify-center p-12 text-center transition-all duration-300 hover:bg-cyan-600/10 hover:border-cyan-500">
            <div className="w-16 h-16 bg-cyan-500/10 text-cyan-500 rounded-full flex items-center justify-center mb-6">
              <Plus className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Tu proyecto aquí?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-[280px]">
              Estamos buscando nuestro próximo gran desafío. Hagamos realidad tu
              visión digital hoy mismo.
            </p>
            <a
              href="#contacto"
              className="bg-cyan-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-cyan-500 transition-all shadow-lg shadow-blue-900/40"
            >
              Contáctanos
            </a>
          </div>
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
