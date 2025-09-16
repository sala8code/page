import { Linkedin, Instagram, Palette, Smartphone } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Creamos sitios web pensando en resultados
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Funcionales, rápidos y a medida de cada cliente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {/* Card 1 */}
          <div className="group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2">
            <Image
              src="/icon2.png"
              alt="Diseño único"
              width={120}
              height={120}
              className="mx-auto mb-6 relative z-10"
            />
            <h3 className="text-2xl font-bold mb-4 text-foreground relative z-10">
              Diseño único y centrado en tu marca
            </h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              Creamos diseños visuales que reflejan la identidad de tu negocio y
              se ven perfectos en todos los dispositivos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2">
            <Image
              src="/icon3.png"
              alt="Plataformas escalables"
              width={120}
              height={120}
              className="mx-auto mb-6 relative z-10"
            />
            <h3 className="text-2xl font-bold mb-4 text-foreground relative z-10">
              Plataformas flexibles y escalables
            </h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              Desarrollamos sitios autoadministrables, rápidos y listos para
              crecer con tu proyecto.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2">
            <Image
              src="/icon1.png"
              alt="Acompañamiento técnico"
              width={120}
              height={120}
              className="mx-auto mb-6 relative z-10"
            />
            <h3 className="text-2xl font-bold mb-4 text-foreground relative z-10">
              Acompañamiento técnico constante
            </h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              Te ayudamos en cada etapa: desde la idea inicial hasta la puesta
              en línea, con soporte claro y accesible.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">
            Síguenos en nuestras redes
          </h3>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://linkedin.com/company/sala8code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/sala8code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/sala8code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
