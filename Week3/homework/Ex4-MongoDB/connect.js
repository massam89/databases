const dotenv = require('dotenv');
dotenv.config();
const mongodb = require('mongodb');

mongodb.connect(process.env.CONNECTIONSTRING, { useUnifiedTopology: true }, async function (err, client) {
  const db = client.db();
  //3-
  const results = await db.collection("city").find({ Name: "Kermoon" }).toArray();
  console.log(results);
  //1- await db.collection("city").insertOne({ Name: 'Kermoon', CountryCode: 'IRN', District: 'Kermoon', Population: 1000 });
  //2- await db.collection("city").updateOne({ Name: "Kermoon" }, { $set: { Population: 2000 } });
  //4- await db.collection("city").deleteOne({ Name: 'Kermoon' });
  client.close();
});