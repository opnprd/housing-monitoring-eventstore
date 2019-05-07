const createEvent = require('../middleware/createEvent');
const matchScheme = require('../middleware/matchScheme');
const send = require('../middleware/send');

module.exports = [
  createEvent,
  matchScheme,
  send('event'),
];
