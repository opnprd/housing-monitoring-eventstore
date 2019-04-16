const config = require('config');
const { MongoClient } = require('mongodb');

let client;

async function connect() {
  if ( client === undefined ) {
    client = await MongoClient.connect(
      config.get('mongodb.url'),
      config.get('mongodb.options')
    );
  }
  return client;
}

module.exports = {
  connect,
}
