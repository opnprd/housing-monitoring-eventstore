const createEvent = require('../middleware/createEvent');
const send = require('../middleware/send');

module.exports = [
  createEvent,
  send('event'),
];
