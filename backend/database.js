const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://CamiloLara:123456789%2A%2A%2A%2F%2F%2F@cluster0.42jppjm.mongodb.net/tecnosam?appName=Cluster0")
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch(err => console.error("Error en MongoDB:", err));