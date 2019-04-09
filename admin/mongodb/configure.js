const mongodb = require('../../services/mongo');

let db;

async function connect() {
  await mongodb.connect();
  db = mongodb.db();
}

async function createIndexes() {
  const events = db.collection('events');
  await Promise.all([
    events.createIndex({ type: 'hashed' }, { name: 'type' }),
    events.createIndex({ urn: 1 }, { name: 'urn', unique: true }),
  ]);
}

async function configure() {
  await connect();
  await createIndexes();
  await mongodb.close();
};

module.exports = configure;
