const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'masoud',
  password: 'masoudvash',
  database: 'week3'
});

const p0 = `DROP TABLE IF EXISTS account, account_changes`;

const p1 = `CREATE TABLE account (
account_number INTEGER PRIMARY KEY,
balance INTEGER
)`;

const p2 = `CREATE TABLE account_changes (
change_number INTEGER,
account_number INTEGER,
amount INTEGER,
changed_date date,
remark TEXT,
PRIMARY KEY (change_number),
FOREIGN KEY (account_number) REFERENCES account(account_number)
)`;

connection.connect();

connection.query(p0, showResults);
connection.query(p1, showResults);
connection.query(p2, showResults);

connection.end();

function showResults(error, results, fields) {
  if (error) throw error;
  console.log(results);
};