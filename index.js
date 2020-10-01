// Importar express
const express = require("express");
// Importar handlebar como template engine
const exphbs = require("express-handlebars");

// Crear un servidor
const app = express();

// Indicar a express, utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Crear una ruta para /
app.get("/", (req, res, next) => {
  res.render("formulario_prestamo");
});

// Crear una ruta para /carrito
app.get("/carrito", (req, res, next) => {
  res.send("Este es tu carrito de compras...");
});

// Inicializar el servidor en un puerto en especifico
app.listen(3000, () => {
  console.log("Servidor ejecutandose en el puerto 3000");
});
