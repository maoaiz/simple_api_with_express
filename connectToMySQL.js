const mysql = require('mysql2/promise');
 
exports.getAllStudents = async function getAllStudents() {
  // Establece la conexión con la DB
  const con = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
 
  // Query/Consulta para traer TODOS los estudiantes
  const query = "SELECT * FROM Students";
  const [results,] = await con.execute(query, null);
 
  return results;
}
