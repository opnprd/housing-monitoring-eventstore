const getEvent = require('../middleware/getEvent');
const send = require('../middleware/send');

function eventProjetion(req, res, next) {
  req.set('event.projection', { geometry: 0 });
  return next();
}

module.exports = [
  eventProjetion,
  getEvent,
  send('event'),
];
