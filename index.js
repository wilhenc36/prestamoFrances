// Importar express
const express = require("express");

// Crear un servidor
const app = express();

// Crear una ruta para /
app.get("/", (req, res, next) => {
  res.send("Bienvenido");
});

// Crear una ruta para /carrito
app.get("/carrito", (req, res, next) => {
  res.send("Este es tu carrito de compras...");
});

// Inicializar el servidor en un puerto en especifico
app.listen(3000, () => {
  console.log("Servidor ejecutandose en el puerto 3000");
});
