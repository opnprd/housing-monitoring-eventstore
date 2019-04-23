const eventsQuery = require('../middleware/eventsQuery');
const renderGeometry = require("../middleware/renderGeometry");
const { eventToFeature } = require('../utils/geojson');
const send = require('../middleware/send');

module.exports = [
  eventsQuery,
  renderGeometry('events', eventToFeature),
  send('events'),
];