const setProjection = require('../middleware/setProjection');
const schemesQuery = require('../middleware/schemesQuery');
const send = require('../middleware/send');

module.exports = [
  setProjection({ schemeId: 1 }),
  schemesQuery,
  send('schemes'),
];