const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  Usuario: { type: String, required: true, unique: true },
  Cedula: { type: String, required: true, unique: true },
  Correo: { type: String, required: true, unique: true },
  Celular: { type: String },
  Direccion: { type: String },
  Contraseña: { type: String, required: true },
 
});

const UsuarioModel = mongoose.model("Usuario", usuarioSchema);
module.exports = UsuarioModel;