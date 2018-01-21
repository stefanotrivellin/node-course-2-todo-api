// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: true
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Stefano',
  //   age: 31,
  //   location: 'Avigliana'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert new user', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });

  client.close();
});
