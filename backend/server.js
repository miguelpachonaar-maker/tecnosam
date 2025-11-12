const express = require("express");
const cors = require("cors");
require("./database");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", require("./rutas/Usuario"));
app.use("/api/productos", require("./rutas/Productos"));
app.use("/api/carrito", require("./rutas/Carrito"));

const PORT = 5000;
app.listen(PORT, () => console.log(` Servidor en http://localhost:${PORT}`));


