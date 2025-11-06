const nodemailer = require("nodemailer");

const envio = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "larasebas10.2005@gmail.com",
    pass: "ulnh reai rlfd zrvo", // tu App Password
  },
});

async function enviarCorreoConfirmacion(correo, nombreUsuario) {
    const mailOptions = {
        from: '"TecnoSam" <larasebas10.2005@gmail.com>',
        to: correo,
        subject: "Confirmación de registro",
        text: `Hola ${nombreUsuario}
               Gracias por registrarte. Tu cuenta ha sido creada correctamente.`,
    };

    try {
        const informacion = await envio.sendMail(mailOptions);
        console.log("Correo enviado:", informacion.response);
    } catch (error) {
        console.error("Error al enviar correo:", error);
    }
}

module.exports = { enviarCorreoConfirmacion };