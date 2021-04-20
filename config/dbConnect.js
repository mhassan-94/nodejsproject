// CONST //
const mysql = require('mysql')

// DATABASE SETTINGS //
const connection = mysql.createConnection({
    host     : process.env.DATABASE_HOST,
    user     : 'root',
    password : process.env.DATABASE_PASSWORD,
    database : 'mydb'
  });
   
// CONNECTION //
connection.connect( (error) => {
    if(error) {
      console.log(error)
    } else {
      console.log('MYSQL DATABASE IS CONNECTED.')
    }
  });

// EXPORTS //
module.exports = connection;