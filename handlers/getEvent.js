const { ObjectId } = require('mongodb');
const mongodb = require('../services/mongo');

async function getEvent(id) {
  const oid = ObjectId(id);
  await mongodb.connect();
  const events = mongodb.db().collection('events');
  const results = await events.findOne({ _id: oid });
  return results;
}

async function eventQuery(req, res, next) {
  let event;
  try {
    event = await getEvent(req.params.id);
  } catch(err) {
    return next(err);
  }
  res.send(event);
  return next();
}

module.exports = eventQuery;