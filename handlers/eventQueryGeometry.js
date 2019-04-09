const eventsQuery = require('../middleware/eventsQuery');
const { eventToFeature } = require('../utils/geojson');
const send = require('../middleware/send');

function renderGeometry(req, res, next) {
  const events = req.get('events');
  const featureCollection = {
      type: 'FeatureCollection',
      features: events.map(eventToFeature)
  }
  req.set('events', featureCollection);
  return next();
}

module.exports = [
  eventsQuery,
  renderGeometry,
  send('events'),
];