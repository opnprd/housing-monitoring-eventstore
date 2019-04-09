const mongodb = require('../services/mongo');

async function findEvents(query = {}) {
  await mongodb.connect();
  const events = mongodb.db().collection('events');
  const results = await events.find(query, { projection: { _id: 0 }}).toArray();
  return results;
}

async function eventQuery(req, res, next) {
  const reducer = (accumulator, currentValue) => {
    const [ key, value ] = currentValue;
    const passKeys = ['type'];
    if (passKeys.includes(key)) accumulator[key] = value;
    return accumulator;
  }

  const query = Object.entries(req.query).reduce(reducer, {});
  const events = await findEvents(query);

  const sanitiseResults = (x) => {
    x.href = `./event/${x.urn}`;
    return x;
  }
  const eventsResult = events.map(sanitiseResults);

  res.send(events);
  return next();
}

module.exports = eventQuery;