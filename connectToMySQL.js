const mysql = require('mysql2/promise');
 
exports.getAllStudents = async function getAllStudents() {
  // Establece la conexión con la DB
  const con = await mysql.createConnection({
    host: "mi-primer-db.cdeqsd7kv096.sa-east-1.rds.amazonaws.com",
    user: "admin_root",
    password: process.env.DB_PASS || "123456",
    database: "RDS_FirstExample"
  });
 
  // Query/Consulta para traer TODOS los estudiantes
  const query = "SELECT * FROM Students";
  const [results,] = await con.execute(query, null);
 
  return results;
}
