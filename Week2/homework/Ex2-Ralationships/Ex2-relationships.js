const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'masoud',
  password: 'masoudvash',
  database: 'week2'
});

const createResearch = `CREATE TABLE research_Papers (
 paper_id INTEGER AUTO_INCREMENT,
 paper_title TEXT,
 conference TEXT,
 publish_date date,
 PRIMARY KEY (paper_id)
)`;

const createJoin = `CREATE TABLE authors_papers (
author_no INTEGER,
paper_id INTEGER,
FOREIGN KEY (author_no) REFERENCES authors(author_no),
FOREIGN KEY (paper_id) REFERENCES research_Papers(paper_id)
)`;

connection.connect();

connection.query(createResearch, showResults);
connection.query(createJoin, showResults);

//create 15 authors
for (i = 0; i < 15; i++) {
  const addDataToAuthors = `INSERT INTO authors (author_name, university,date_of_birth,h_index,gender,mentor)
  VALUES ('${randomData(createData().firstName)} ${randomData(createData().lastName)}', '${randomData(createData().university)}','${randomData(createData().birth)}','${randomData(createData().h_index)}','${randomData(createData().gender)}','${randomData(createData().mentor)}' )
`;

  connection.query(addDataToAuthors, showResults);
}

//create 30 papers
for (i = 0; i < 30; i++) {
  const addDataToPaper = `INSERT INTO research_Papers(paper_title, conference, publish_date)
VALUES('${createData().paper_title[i]}', '${randomData(createData().conference)}','${randomData(createData().publish_data)}')
`;

  connection.query(addDataToPaper, showResults);
}

//create 30 ralations beetween papers and authors
for (i = 0; i < 30; i++) {
  const addDataToJoin = `INSERT INTO authors_papers(author_no,paper_id)
  VALUES(${Math.round(Math.random() * 15) + 1},${Math.round(Math.random() * 30) + 1})
`
  connection.query(addDataToJoin, showResults);
}

connection.end();


function showResults(error, results, fields) {
  if (error) throw error;
  console.log(results);
};

//create data
function createData() {
  const firstName = [
    'Adam',
    'Augustus',
    'Caspian',
    'Charlie',
    'Dante',
    'Edward',
    'Emmett',
    'Everett',
    'Ian',
    'Jonathan',
    'Kane',
    'Kian',
    'Magnus',
    'Maverick',
    'Rhett',
    'Winston',
    'Xander'
  ];

  const lastName = [
    'Akbari',
    'Hosseini',
    'Damadi',
    'Jamshidi',
    'Sanewi',
    'Faramarzpor'
  ]

  const university = [
    'Harvard University',
    'niversity of Cambridge',
    'Columbia University',
    'University of Oxford',
    'Yale University',
    'Stanford University',
    'University of Paris (Sorbonne)',
    'University of Chicago',
    'University of Michigan',
    'Princeton University'
  ];

  const birth = [
    '1999-06-15',
    '2000-07-18',
    '2003-01-21',
    '1981-05-14',
    '2005-01-14',
    '1998-04-15'
  ];

  const h_index = [
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10
  ];

  const gender = ['M', 'F'];

  const mentor = [
    'John',
    'Soghrat',
    'Jaber',
    'Arashk',
    'Sohrab',
    'Rostam'
  ];

  const paper_title = [
    'Pests of Mango Mangifera Indica Linn. at Storage And Their Control',
    'Functional Analysis of Growth in Large White Male Turkeys',
    'Women Health in Kerala Tribe A Sociological Analysis of Muthuvan Community',
    'PRESENT SCENARIOS OF PHARMACEUTICAL INDUSTRY IN INDIA',
    'Determined aphid-host plant relations from Eastern Black Sea regions of Turkey',
    'Sustainable Solid Waste Management through Landscaped Landfills',
    'Molecular Mechanism of Microtubules Dynamics and its Precise Regulation Inside Cells',
    'EEG Classification using Semi Supervised Learning',
    'sdfkjldsfjksadfsadfd  fas dfasdf f sad df sa',
    'sdfsadfsdfqwrtqtj r  rt tr tr ',
    'ert ver ert wgtr wtr tr gegt ',
    'ertertvqrv ert ert ert ert er erq yrurjuhy',
    'idrgf er eirut qruet idjgefi gjqerit ert',
    'fdfjdfjgrejtjdf   egr er eg ',
    'dfsgio irq euir euir eruio uier ueriu',
    'alsjd asd ad',
    'sdfsdfsf',
    'werwerw',
    'sdfs werwerdfsf',
    'sdfsdwerwerfsf',
    'sdfsdfsdfsf',
    'ssdf   dertertfsdfsf',
    'sdf35t e rertsdfsf',
    'sdfswersdfdfsf',
    'sdfsertertd4rfsf',
    'sdferteertrttv  tsdfsf',
    'sdf sertertdfsf',
    'sdfsertertdfsf',
    'sdfert rthyhjrhysdfsf',
    'sdfs erterdfsf',
  ];

  const conference = [
    'Iran',
    'India',
    'USE',
    'USA',
    'Spain',
    'Italy'
  ];

  const publish_data = [
    '2015-06-15',
    '2020-07-18',
    '2021-01-21',
    '2005-05-14',
    '2010-01-14',
    '2014-04-15'
  ];

  return { firstName, lastName, university, birth, h_index, gender, mentor, paper_title, conference, publish_data }
}

//random data
function randomData(array) {
  return array[Math.round(Math.random() * (array.length - 1))];
}