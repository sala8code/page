"use client";

import Image from "next/image";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "543413891761"; // número en formato correcto
    const message = "Hola! Me interesa conocer más sobre sus servicios.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 cursor-pointer bg-primary hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <Image src="/whattsap.png" alt="WhatsApp" width={25} height={25} />
    </button>
  );
}
