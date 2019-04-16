const setEventGeometryMiddleware = require('../middleware/setEventGeometry');
const send = require('../middleware/send');

module.exports = [
  setEventGeometryMiddleware,
  send(),
];
