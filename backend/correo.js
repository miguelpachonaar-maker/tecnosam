const nodemailer = require("nodemailer");

const envio = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "larasebas10.2005@gmail.com",
    pass: "ulnh reai rlfd zrvo",
  },
});

async function enviarCorreoConfirmacion(correo, nombreUsuario) {
    const mailOptions = {
        from: '"TecnoSam" <larasebas10.2005@gmail.com>',
        to: correo,
        subject: "Bienvenido a TecnoSam - Tu registro fue exitoso",
        html: `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
        <h2 style="color: #007BFF;">¡Hola, ${nombreUsuario}! </h2>
        <p style="font-size: 16px; color: #333;">
          Gracias por registrarte en <strong>TecnoSam</strong>. Tu cuenta ha sido creada correctamente.
        </p>
        <p style="font-size: 15px; color: #333;">
          Ahora puedes explorar nuestros productos, agregar artículos a tu carrito y disfrutar de las mejores ofertas en tecnología.
        </p>
        <a href="http://localhost:3000" style="display:inline-block; background-color:#007BFF; color:white; padding:10px 20px; border-radius:5px; text-decoration:none; font-weight:bold;">
          Ir a TecnoSam
        </a>
        <p style="margin-top: 20px; font-size: 13px; color: #666;">
          Si no realizaste este registro, puedes ignorar este mensaje.
        </p>
      </div>`,
    };

    try {
        const informacion = await envio.sendMail(mailOptions);
        console.log("Correo enviado:", informacion.response);
    } catch (error) {
        console.error("Error al enviar correo:", error);
    }
}

module.exports = { enviarCorreoConfirmacion };