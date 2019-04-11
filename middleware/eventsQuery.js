const parseQueryString = require('../utils/parseQueryString');

const { findEvents } = require('../resources/events');

const keyMap = {
  type: 'type',
  intersects: 'geometry',
};

const inflater = (key, value) => {
  if ( key === 'intersects' ) {
    return { $geoIntersects: { $geometry: JSON.parse(value) } };
  };
  return value;
};

async function eventsQuery(req, res, next) {
  const query = parseQueryString(req.query, keyMap, inflater);

  const projection = { _id: 0, ...req.get('event.projection') };
  const events = await findEvents(query, projection);

  req.set('events', events);

  return next();
}

module.exports = eventsQuery;
