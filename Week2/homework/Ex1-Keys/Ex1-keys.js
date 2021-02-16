const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'masoud',
  password: 'masoudvash',
  database: 'week2'
});

const createAuthors = `CREATE TABLE authors (
  author_no INTEGER AUTO_INCREMENT,
  author_name TEXT,
  university TEXT,
  date_of_birth date,
  h_index INTEGER,
  gender ENUM('M','F'),
  PRIMARY KEY(author_no)
)`;

const addMentor = `ALTER TABLE authors
ADD mentor TEXT`;

connection.connect();

connection.query(createAuthors, showResults);
connection.query(addMentor, showResults);


connection.end();


function showResults(error, results, fields) {
  if (error) throw error;
  console.log(results);
};