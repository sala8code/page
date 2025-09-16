import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>
          Sala8Code | Transformamos tus ideas en soluciones digitales
        </title>
        <meta
          name="description"
          content="Creamos sitios web, aplicaciones y soluciones digitales a medida para tu empresa. Contactanos y llevá tu proyecto al siguiente nivel."
        />
        <link rel="canonical" href="https://sala8code.vercel.app" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Sala8Code" />
        <meta
          property="og:description"
          content="Creamos sitios web, aplicaciones y soluciones digitales a medida para tu empresa."
        />
        <meta property="og:url" content="https://sala8code.vercel.app" />
        <meta property="og:site_name" content="Sala8Code" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://sala8code.vercel.app/logo.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sala8Code" />
        <meta
          name="twitter:description"
          content="Creamos sitios web, aplicaciones y soluciones digitales a medida para tu empresa."
        />
        <meta
          name="twitter:image"
          content="https://sala8code.vercel.app/logo.png"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
