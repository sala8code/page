import { Linkedin, Instagram } from "lucide-react"

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Sobre Nosotros</h2>
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground text-pretty">
              Somos un equipo apasionado de desarrolladores y diseñadores comprometidos con la excelencia tecnológica.
              Ayudamos a empresas de todos los tamaños a digitalizar sus procesos y alcanzar sus objetivos a través de
              soluciones tecnológicas innovadoras y de alta calidad.
            </p>
            <p className="text-xl text-muted-foreground text-pretty">
              Creemos en la importancia de entender profundamente las necesidades de nuestros clientes para crear
              productos que realmente marquen la diferencia en su negocio. Nuestro enfoque se basa en la colaboración
              estrecha, la comunicación transparente y la entrega de resultados excepcionales.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/company/sala8code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://instagram.com/sala8code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
              >
                <Instagram className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://x.com/sala8code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
