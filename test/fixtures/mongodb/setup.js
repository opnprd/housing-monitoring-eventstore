const fs = require('fs');
const mongodb = require('../../../services/mongo');

async function getEvents() {
  await mongodb.connect();
  db = mongodb.db();
  const events = await db.collection('events').find({}).toArray();
  fs.writeFileSync(__dirname + '/events.json', JSON.stringify(events, null, 2))
  await mongodb.close();
}

async function putEvents() {
  const eventData = require('./events.json');
  await mongodb.connect();
  db = mongodb.db();
  try {
    await db.collection('events').insertMany(eventData);
  } catch(err) {
    console.error(err.errmsg);
  }
  await mongodb.close();
}

putEvents();