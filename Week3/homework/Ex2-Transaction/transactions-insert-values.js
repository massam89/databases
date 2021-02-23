const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'masoud',
  password: 'masoudvash',
  database: 'week3'
});

const p0 = `INSERT INTO account(account_number,balance)
VALUES
(100,1550),
(101,2500),
(102,500),
(103,600),
(104,5060)`;

connection.connect();

connection.query(p0, showResults);

connection.end();

function showResults(error, results, fields) {
  if (error) throw error;
  console.log(results);
};