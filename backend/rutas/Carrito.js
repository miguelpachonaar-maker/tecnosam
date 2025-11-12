const express = require("express");
const router = express.Router();
const Carrito = require("../modelos/Carrito");

router.post("/agregar", async (solis, res) => {
    const {usuarioID, productoID, cantidad} = solis.body;

    let carrito = await Carrito.findOne ({ usuarioID});

    if(!carrito) {
        carrito = new Carrito({ usuarioID, productos: []});
    }

    const productoExiste = carrito.productos.find(
        (p) => p.productoID.toString() === productoID
    );

    if (productoExiste) {
        productoExiste.cantidad += Number(cantidad);
    } else {
        carrito.productos.push ({ productoID, cantidad});
    }

    await carrito.save();
    res.json({ mensaje: "Producto agregado al carrito"});
});

router.get("/:usuarioID", async (solis, res) => {
    const { usuarioID } = solis.params;
    const carrito = await  Carrito.findOne({ usuarioID}).populate("productos.productoID");
    res.json(carrito || { productos: []});
});


router.put("/:usuarioID/:productoID", async (req, res) => {
  const { usuarioID, productoID } = req.params;
  const { cantidad } = req.body;

  try {
    const carrito = await Carrito.findOne({ usuarioID });
    if (!carrito) return res.status(404).json({ message: "Carrito no encontrado" });

    const producto = carrito.productos.find(p => p.productoID.toString() === productoID);
    if (!producto) return res.status(404).json({ message: "Producto no encontrado en el carrito" });

    producto.cantidad += cantidad;

    if (producto.cantidad <= 0) {
      carrito.productos = carrito.productos.filter(p => p.productoID.toString() !== productoID);
    }

    await carrito.save();

    // 🔹 Poblamos antes de devolverlo
    const carritoActualizado = await Carrito.findOne({ usuarioID }).populate("productos.productoID");
    res.json(carritoActualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar cantidad", error });
  }
});


module.exports = router;
