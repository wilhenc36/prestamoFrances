// Importar express
const express = require("express");
// Importar handlebar como template engine
const exphbs = require("express-handlebars");
// Importar body parser que nos permite acceder al cuerpo de la peticion HTTP
const bodyParser = require("body-parser");
const path = require("path");
// Importar la funcion de calculo de metodo Frances
const { calcularMetodoFrances } = require("./calculoMetodoFrances");

//Habilitar el archivo de variables de entorno
require("dotenv").config({ path: ".env" });

// Crear un servidor
const app = express();

// Indicar a express, utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

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

const host = "0.0.0.0";
const port = process.env.PORT;

app.listen(port, host, () => {
  console.log(`Servidor ejecutandose en el puerto ${port}`);
});
