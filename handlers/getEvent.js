const mongodb = require('../services/mongo');

async function getEvent(urn) {
  await mongodb.connect();
  const events = mongodb.db().collection('events');
  const results = await events.findOne({ urn: urn }, { projection: { _id: 0 } });
  return results;
}

async function eventQuery(req, res, next) {
  let event;
  try {
    event = await getEvent(req.params.urn);
  } catch(err) {
    return next(err);
  }
  res.send(event);
  return next();
}

module.exports = eventQuery;