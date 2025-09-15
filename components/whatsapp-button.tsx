"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with actual phone number
    const message = "Hola! Me interesa conocer más sobre sus servicios.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-primary hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
}
