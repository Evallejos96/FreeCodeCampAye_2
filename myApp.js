let express = require('express');
let app = express();

// ejercicio 1
console.log("Hello World");

// ejercicio 2
app.get("/", function(req, res) {
  res.send("Hello Express");
});

module.exports = app;































 module.exports = app;
