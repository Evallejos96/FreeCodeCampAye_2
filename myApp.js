require('dotenv').config();

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

// Ejercicio 5 + 6 (JSON con opción uppercase)
app.get("/json", function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ "message": message });
});

module.exports = app;
