const mysql = require('mysql')

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'miniui'
});


module.exports = db;


// connection.connect()
//
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err
//
//   console.log('The solution is: ', rows[0].solution)
// })
//
// connection.end()
