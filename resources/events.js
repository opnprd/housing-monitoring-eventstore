const { v4 } = require('uuid');
const debug = require('debug')('eventstore/resources/events');
const mongodb = require('../services/mongo');

async function createEvent(eventData) {
  const mongoClient = await mongodb.connect();
  const events = mongoClient.db().collection('events');
  const queryOptions = { projection: { _id: 0, geometry: 0, eventData: 0 } };

  eventData.date = eventData.date ? new Date(eventData.date) : null;

  // An event on the same day of the same type with the same ref is the same event
  const query = {
    type: eventData.type,
    ref: eventData.ref,
    date: eventData.date,
  };

  let event = await events.findOne(query, queryOptions);

  if ( !event ) {
    const insert = await events.insertOne({ eventId: v4(), ...eventData });
    const id = insert.insertedId;
    debug(`Inserted Id = ${id}`);
    event = await events.findOne({ _id: id }, queryOptions);
  } 

  debug(event);

  return event;
}

async function updateEvent(id, data) {
  const mongoClient = await mongodb.connect();
  const events = mongoClient.db().collection('events');
  return events.updateOne({ eventId: id}, { $set: data });
}

async function updateGeometry(id, geometry) {
  debug(`Updating ${id} geometry`);
  const mongoClient = await mongodb.connect();
  const events = mongoClient.db().collection('events');
  await events.updateOne({ eventId: id }, { $set: { geometry: geometry }});
}

async function findEvents(query={}, projection={}) {
  const mongoClient = await mongodb.connect();
  const events = mongoClient.db().collection('events');
  const results = await events.find(query, { projection: projection}).toArray();
  return results;
}

async function getOneEvent(eventId, projection={}) {
  const mongoClient = await mongodb.connect();
  const events = mongoClient.db().collection('events');
  const results = await events.findOne({ eventId: eventId }, { projection: projection });
  return results;
}

module.exports = {
  createEvent,
  findEvents,
  getOneEvent,
  updateEvent,
  updateGeometry,
}
