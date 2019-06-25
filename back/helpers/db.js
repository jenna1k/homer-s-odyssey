const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@SBkudamm62',
  database: 'homer',
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
