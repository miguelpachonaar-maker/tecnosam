const nodemailer = require("nodemailer");

// Configura tu transporte con Gmail y App Password
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "larasebas10.2005@gmail.com",
    pass: "ulnh reai rlfd zrvo",
  },
});

async function enviarCorreoPrueba() {
  try {
    const info = await transporter.sendMail({
      from: '"Mi App" <larasebas10.2005@gmail.com>', // remitente
      to: "claudiamarcelamr@hotmail.com",       // destinatario
      subject: "Correo de prueba",
      text: "¡Hola! Este es un correo de prueba desde Nodemailer.",
    });

    console.log("Correo enviado:", info.response);
  } catch (error) {
    console.error("Error al enviar correo:", error);
  }
}

enviarCorreoPrueba();