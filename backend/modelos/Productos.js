const mongoose = require("mongoose");


const productoEsquema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    imagen: String,
    descripcion: String,

});

module.exports = mongoose.model("Producto", productoEsquema);