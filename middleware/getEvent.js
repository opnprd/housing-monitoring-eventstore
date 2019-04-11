const { getOneEvent } = require('../resources/events');

async function getEvent(req, res, next) {
  let event;
  const projection = { _id: 0, ...req.get('event.projection') };
  try {
    event = await getOneEvent(req.params.eventId, projection);
  }
  catch (err) {
    return next(err);
  }
  req.set('event', event);
  return next();
}

module.exports = getEvent;
