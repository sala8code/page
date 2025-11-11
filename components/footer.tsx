import { Linkedin, Twitter, Phone, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info - Left Column */}
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="mb-4 items-center justify-center mx-auto"
            />
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  ¡Contáctanos!
                </h4>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-sm">+54 341 3891761</span>
                </div>
                <div>
                  <span className="text-sm">sala8code@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Us - Center Left Column */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">
              ¡Somos Sala8Code!
            </h4>
            <p className="text-muted-foreground leading-relaxed text-sm">
              En Sala8Code, creamos soluciones digitales que ayudan a las
              empresas a crecer, innovar y destacarse en un mercado cada vez más
              competitivo. Nuestro enfoque está en la calidad, la escalabilidad
              y la tecnología de vanguardia.
            </p>
          </div>

          {/* Services - Center Right Column */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">
                Desarrollo Web
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Apps Móviles
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                E-commerce
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                UI/UX Design
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Consultoría
              </li>
            </ul>
          </div>

          {/* Social Media - Right Column */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mt-10 mb-4">
              ¡Encuéntranos aquí!
            </h4>
            <div className="flex items-center text-[#29A9E0] justify-center space-x-4">
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
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>Sala8Code ©2025 | Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
