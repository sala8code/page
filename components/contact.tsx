"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { contactAction } from "@/lib/contactAction";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await contactAction(formData); // llama a la Server Action
      toast.success("Formulario enviado correctamente!"); // muestra el toast
      form.reset(); // limpia el formulario
    } catch (err: any) {
      toast.error(err.message || "Error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            ¿Listo para empezar tu{" "}
            <span className="text-primary">proyecto</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a transformar
            tus ideas en soluciones digitales exitosas.
          </p>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 max-w-4xl mx-auto">
          <Card>
            <CardContent className="">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      className="bg-white/30"
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      className="bg-white/30"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa (opcional)</Label>
                  <Input
                    className="bg-white/30"
                    id="company"
                    name="company"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    className="bg-white/30"
                    id="message"
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full group">
                  <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
