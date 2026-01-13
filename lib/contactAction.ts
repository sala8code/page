"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactAction(formData: FormData) {
  console.log(process.env.RESEND_API_KEY);
  const data = Object.fromEntries(formData) as Record<string, string>;
  const { name, message, email, company } = data;

  if (!name || !email || !message) {
    throw new Error("Nombre, email y mensaje son obligatorios");
  }
  // Regex básico para email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Email inválido");
  }

  try {
    await resend.emails.send({
      from: "Sala8Code <onboarding@resend.dev>",
      to: "sala8code@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });
    console.log("Email enviado correctamente");
  } catch (err) {
    console.error("Error enviando el email:", err);
  }
}
