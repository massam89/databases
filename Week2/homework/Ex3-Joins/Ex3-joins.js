const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'masoud',
  password: 'masoudvash',
  database: 'week2'
});

const ex3_1 = `SELECT author_name, mentor
FROM authors
`;

const ex3_2 = `SELECT authors.*, research_papers.paper_title
FROM authors
LEFT JOIN authors_papers
ON authors.author_no = authors_papers.author_no
LEFT JOIN research_papers
ON authors_papers.paper_id = research_papers.paper_id
`;

connection.connect();

connection.query(ex3_1, showResults);
connection.query(ex3_2, showResults);

connection.end();

function showResults(error, results, fields) {
  if (error) throw error;
  console.log(results);
};