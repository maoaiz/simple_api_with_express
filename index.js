var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log("New request GET to /");
  res.send('Hola Mundo!');
});

const port = 3000;
const nodeenv = process.env.NODE_ENV;
const description = process.env.API_DESCRIPTION;

app.listen(port, function() {
  console.log(`Aplicación escuchando el puerto ${port}!`);
  console.log(`Trabajando con entorno ${nodeenv}`);
  console.log(`Descripción: ${description}`);
});
