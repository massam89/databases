const dotenv = require('dotenv');
dotenv.config();
const mongodb = require('mongodb');

mongodb.connect(process.env.CONNECTIONSTRING, { useUnifiedTopology: true }, async function (err, client) {
  const db = client.db();
  const results = await db.collection("city").find({ Name: "Kerman" }).toArray();
  console.log(results);
  client.close();
});