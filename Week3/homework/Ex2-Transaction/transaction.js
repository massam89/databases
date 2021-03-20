const date = require('date-and-time');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'masoud',
  password: 'masoudvash',
  database: 'week3'
});

const current0 = new Date();
const current = date.format(current0, 'YYYY/MM/DD HH:mm:ss');
console.log(current)
const p0 = `START TRANSACTION`;

const p1 = `UPDATE account
SET balance = balance - 1000
WHERE account_number = 101;
`;

const p2 = `UPDATE account
SET balance = balance + 1000
WHERE account_number = 102;
`;

const p3 = `INSERT INTO account_changes(change_number,account_number,amount,changed_date,remark)
VALUES(1,101,-1000,'${current}','some text'),
(2,102,1000,'${current}','some text')`

const p4 = `COMMIT`

connection.connect();

connection.query(p0, showResults);
connection.query(p1, showResults);
connection.query(p2, showResults);
connection.query(p3, showResults);
connection.query(p4, showResults);


connection.end();

function showResults(error, results, fields) {
  if (error) throw error;
  console.log(results);
};