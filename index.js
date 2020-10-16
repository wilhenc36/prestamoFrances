// Importar express
const express = require("express");
// Importar handlebar como template engine
const exphbs = require("express-handlebars");
// Importar body parser que nos permite acceder al cuerpo de la peticion HTTP
const bodyParser = require("body-parser");
// Importar la funcion de calculo de metodo Frances
const { calcularMetodoFrances } = require("./calculoMetodoFrances");

// Crear un servidor
const app = express();

// Indicar a express, utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Habilitar body parser para leer los datos del cuerpo de las peticions POST
app.use(bodyParser.urlencoded({ extended: true }));

// Crear una ruta para /
// Informacion sobre los verbos HTTP
app.get("/", (req, res, next) => {
  res.render("formulario_prestamo");
});

// Crear una ruta para /prestamo
app.post("/prestamo", (req, res, next) => {
  // Asignacion por distructuring
  const { monto, tasaInteres, periodo } = req.body;

  const cuotas = calcularMetodoFrances(monto, tasaInteres, periodo);

  if (!cuotas) {
    res.render("error");
  } else {
    res.render("resultado_prestamo", { cuotas });
  }
});

// Inicializar el servidor en un puerto en especifico
app.listen(3000, () => {
  console.log("Servidor ejecutandose en el puerto 3000");
});
