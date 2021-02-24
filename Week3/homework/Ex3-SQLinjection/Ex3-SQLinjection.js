const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'masoud',
  password: 'masoudvash',
  database: 'world'
});

function getPopulation(Country, name, code) {
  connection.connect();
  connection.query(
    `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
    function (error, result) {
      if (error) throw error;
      console.log(result);
    }
  );
  connection.end();
}


const a = "' OR 1=1-- ";
const b = 'AUT';
getPopulation('country', a, b);