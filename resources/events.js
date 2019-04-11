const mongodb = require('../services/mongo');

async function findEvents(query={}, projection={}) {
  await mongodb.connect();
  const events = mongodb.db().collection('events');
  const results = await events.find(query, { projection: projection}).toArray();
  return results;
}

async function getOneEvent(eventId, projection={}) {
  await mongodb.connect();
  const events = mongodb.db().collection('events');
  const results = await events.findOne({ eventId: eventId }, { projection: projection });
  return results;
}

module.exports = {
  findEvents,
  getOneEvent,
}
