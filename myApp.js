require('dotenv').config();

let express = require('express');
let app = express();

// 🔥 Ejercicio 7: Middleware logger (VA ACÁ)
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// Ejercicio 8 /now con middleware encadenado
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ time: req.time });
});

// Ejercicio 9 - Nuevo: ruta con parámetro
app.get("/:word/echo", function(req, res) {
  res.json({ echo: req.params.word });
});

//Ejercicio 10 - Name con query params
app.get("/name", function(req, res) {
  const first = req.query.first;
  const last = req.query.last;
  res.json({ name: first + " " + last });
});


// Ejercicio 1
console.log("Hello World");

// Ejercicio 2 (comentado si está)
/// app.get("/", (req, res) => { res.send("Hello Express"); });

// Ejercicio 3 - enviar index.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Ejercicio 4 - contenido estático
app.use("/public", express.static(__dirname + "/public"));

// Ejercicio 5 + 6 (JSON con opción uppercase)
app.get("/json", function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ "message": message });
});

module.exports = app;
