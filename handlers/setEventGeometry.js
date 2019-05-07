const setEventGeometryMiddleware = require('../middleware/setEventGeometry');
const getEvent = require('../middleware/getEvent');
const matchScheme = require('../middleware/matchScheme');

const send = require('../middleware/send');

module.exports = [
  setEventGeometryMiddleware,
  getEvent,
  matchScheme,
  send(),
];
