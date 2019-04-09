const config = require('config');
const { MongoClient } = require('mongodb');

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(
  config.get('mongodb.url'),
  config.get('mongodb.options')
);

module.exports = client;