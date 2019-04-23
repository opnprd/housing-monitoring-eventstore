const setEventGeometryMiddleware = require('../middleware/setEventGeometry');
const matchScheme = require('../middleware/matchScheme');

const send = require('../middleware/send');

module.exports = [
  setEventGeometryMiddleware,
  matchScheme,
  send(),
];
