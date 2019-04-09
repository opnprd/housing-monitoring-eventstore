const eventsQuery = require('../middleware/eventsQuery');
const send = require('../middleware/send');

function eventProjetion(req, res, next) {
  req.set('event.projection', { geometry: 0 });
  return next();
}

module.exports = [
  eventProjetion,
  eventsQuery,
  send('events'),
];