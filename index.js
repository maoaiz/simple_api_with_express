var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

const port = 3000;

app.listen(port, function() {
  console.log(`Aplicación escuchando el puerto ${posr}!`);
});
