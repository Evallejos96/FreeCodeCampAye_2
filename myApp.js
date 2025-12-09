let express = require('express');
let app = express();

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

module.exports = app;
