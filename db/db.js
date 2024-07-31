const mysql= require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost', 
  database : 'todo_app',
  user     : 'root',
  password : ''
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

module.exports = connection;