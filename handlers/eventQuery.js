const mongodb = require('../services/mongo');

async function findEvents(query = {}) {
  await mongodb.connect();
  const events = mongodb.db().collection('events');
  const results = await events.find(query).toArray();
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
    x.href = `./event/${x._id}`;
    delete x._id;
    return x;
  }
  const eventsResult = events.map(sanitiseResults);

  res.send(events);
  return next();
}

module.exports = eventQuery;