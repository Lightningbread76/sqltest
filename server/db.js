
const { MongoClient, Db, ServerApiVersion } = require('mongodb');

const{dbKey} = require('./config');

let db = Db;

const connectToDb = () => {
  return new Promise((resolve) => {
    const uri = dbKey;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    client.connect((err) => {
      if (err) {
        throw new Error('connecting to db');
      }
      db = client.db('mywebapp');
      resolve(db);
      console.log('successfully connected to db');
    });
  });
};

module.exports = {db, connectToDb};