const mongoose = require("mongoose");

const carritoEsquema = new mongoose.Schema({
    usuarioID: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  productos: [
    {
      productoID: { type: mongoose.Schema.Types.ObjectId, ref: "Producto" },
      cantidad: { type: Number, default: 1 },
    },
  ]
})

module.exports = mongoose.model ("Carrito", carritoEsquema);