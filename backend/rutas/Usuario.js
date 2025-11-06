const express = require("express");
const router = express.Router();
const Usuario = require("../modelos/Usuario");
console.log(Usuario);
const bcrypt = require("bcrypt");
const { enviarCorreoConfirmacion } = require("../correo");

router.post("/registro", async (req, res) => {
    try {
        console.log("Datos recibidos en backend:", req.body);
        const {Usuario: nombreUsuario,  Cedula, Correo, Celular, Direccion, Contraseña,}= req.body;

        if (!nombreUsuario || !Cedula || !Correo || !Celular || !Direccion || !Contraseña) {
    return res.status(400).json({ mensaje: "Usuario, contraseña, cédula y correo son obligatorios" });
}

        const hash = await bcrypt.hash(Contraseña, 10);



        const nuevoUsuario = new Usuario({
            Usuario: nombreUsuario,
            Contraseña: hash,
            Cedula,
            Correo,
            Celular,
            Direccion
        });
        
        await nuevoUsuario.save();

        await enviarCorreoConfirmacion(Correo, nombreUsuario);
        
        res.status(201).json({mensaje: "Usuario registrado exitosamente"});

    }  catch (error){
        if (error.code === 11000) {
        return res.status(400).json({ mensaje: "El usuario, cédula o correo ya existe" });
    }
    console.error("Error al registrar:", error);
    res.status(500).json({ mensaje: "Error al registrar usuario", error: error.message });
    }
});

router.post("/login", async (req, res) => {
    const { Usuario: usuarioBody, Contraseña } = req.body;
    try {
        console.log("Datos recibidos en login:", req.body);
      const usuarioEncontrado = await Usuario.findOne({ Usuario: usuarioBody });
      if (!usuarioEncontrado) {
        return res.status(404).json({ mensaje: "Usuario no encontrado"});
      }

      const coincide = await bcrypt.compare(Contraseña, usuarioEncontrado.Contraseña);
      if(!coincide){
       return res.status(401).json({mensaje: "Contraseña incorrecta"});
      }
      const { Contraseña: _, ...usuarioSinContraseña } = usuarioEncontrado.toObject();  
      res.json({ mensaje: "Inicio de sesión exitoso", usuario: usuarioSinContraseña });

    } catch (error){
        console.error(" Error en login:", error);
      res.status(500).json({ mensaje: "Error en el servidor", error });
    }
});

module.exports = router;