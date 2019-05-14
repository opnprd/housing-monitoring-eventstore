const aggregateSchememes = require('../middleware/aggregateSchemes');
const send = require('../middleware/send');

module.exports = [
  aggregateSchememes,
  send('report'),
];