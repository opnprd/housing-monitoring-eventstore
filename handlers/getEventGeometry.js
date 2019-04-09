const getEvent = require('../middleware/getEvent');
const { eventToFeature } = require('../utils/geojson');
const send = require('../middleware/send');

function renderGeometry(req, res, next) {
  const event = req.get('event');
  req.set('event', eventToFeature(event));
  return next();
}

module.exports = [
  getEvent,
  renderGeometry,
  send('event'),
];