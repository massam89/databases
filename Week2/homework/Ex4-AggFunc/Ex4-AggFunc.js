const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'masoud',
  password: 'masoudvash',
  database: 'week2'
});

const ex4_1 = `SELECT research_papers.paper_title, COUNT(authors.author_name)
FROM research_papers
JOIN authors_papers
ON authors_papers.paper_id = research_papers.paper_id
JOIN authors
ON authors.author_no = authors_papers.author_no
GROUP BY research_papers.paper_title`;

const ex4_2 = `SELECT COUNT(research_papers.paper_title) AS sum
FROM authors
JOIN authors_papers
ON authors.author_no = authors_papers.author_no
JOIN research_papers
ON authors_papers.paper_id = research_papers.paper_id
WHERE authors.gender = 'M'`;

const ex4_3 = `SELECT university, h_index
FROM authors
GROUP BY university 
ORDER BY h_index DESC`;

const ex4_4 = `SELECT authors.university, COUNT(research_papers.paper_id)
FROM authors
JOIN authors_papers
ON authors.author_no = authors_papers.author_no
JOIN research_papers
ON authors_papers.paper_id = research_papers.paper_id
GROUP BY university
ORDER BY COUNT(research_papers.paper_id) DESC`;

const ex4_5 = `SELECT university, MIN(h_index), MAX(h_index)
FROM authors
GROUP BY university 
ORDER by university DESC`;


connection.connect();

connection.query(ex4_1, showResults);
connection.query(ex4_2, showResults);
connection.query(ex4_3, showResults);
connection.query(ex4_4, showResults);
connection.query(ex4_5, showResults);

connection.end();

function showResults(error, results, fields) {
  if (error) throw error;
  console.log(results);
};