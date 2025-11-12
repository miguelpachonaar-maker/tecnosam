const express = require("express");
const router = express.Router();
const Producto = require("../modelos/Productos");

router.post("/agregar", async (soli,res) => {
    try{
        const nuevo = new Producto(soli.body);
        await nuevo.save();
        res.status(201).json({mensaje: "Producto agregado", producto: nuevo});
    } catch (error){
        res.status(500).json({ mensaje: "Error al agregar producto", error});
    }
});

router.get("/", async (soli, res) => {
    const productos = await Producto.find();
    res.json(productos);
});

module.exports = router;