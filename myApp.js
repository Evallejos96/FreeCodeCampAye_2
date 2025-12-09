let express = require('express');
let app = express();

// Ejercicio 1
console.log("Hello World");

// Ejercicio 2 (comentado)
// app.get("/", function(req, res) {
//   res.send("Hello Express");
// });

// Ejercicio 3: enviar index.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
