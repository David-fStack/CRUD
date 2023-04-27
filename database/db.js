const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '33971820d',
  database: 'billeteradb',
});

connection.connect((error) => {
  if (error) {
    console.error('Error de conexión:', +error);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});


module.exports = connection