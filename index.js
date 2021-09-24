const sql = require('./connectToMySQL');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log("New request GET to /");
  res.send('Hola Mundo!');
});

app.get('/students', async (req, res) => {
  console.log("New request GET to /students");
  try {
    // Esperamos a que termine de devolver los estudiantes
    // antes de retornar una respuesta
    const students = await sql.getAllStudents();
    res.send(students);
  } catch (err) {
    console.error(`Error: `, err.message);
  }
})


const port = 3000;
const nodeenv = process.env.NODE_ENV;
const description = process.env.API_DESCRIPTION;

app.listen(port, function() {
  console.log(`Aplicación escuchando el puerto ${port}!`);
  console.log(`Trabajando con entorno ${nodeenv}`);
  console.log(`Descripción: ${description}`);
});
