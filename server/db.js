
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

const pushToDb = (post) => {
  return new Promise((resolve) => {
    const uri = dbKey;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect((err) => {
      if (err) {
        throw new Error('connecting to db');
      }
      db = client.db('mywebapp');
      db.collection('instanames').insertOne({"handle": post})
      resolve(db);
      console.log('successfully pushed to db');
    });
  });
};

const pullFromDb = (post) => {
  return new Promise((resolve) => {
    const uri = dbKey;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect((err) => {
      if (err) {
        throw new Error('connecting to db');
      }
      db = client.db('mywebapp');
      let result = db.collection('instanames').find({'handle' : post});
      resolve(result);
      console.log('successfully pulled ' + result + 'from db');
    });
  });
};

const getDbSize = () => {
  return new Promise((resolve) => {
    const uri = dbKey;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect((err) => {
      if (err) {
        throw new Error('connecting to db');
      }
      db = client.db('mywebapp');
      let result = db.collection('instanames').find({'handle' : ''}).count();
      resolve(result);
      console.log('successfully connected to db');
    });
  });
};



module.exports = {connectToDb,pushToDb,pullFromDb,getDbSize};