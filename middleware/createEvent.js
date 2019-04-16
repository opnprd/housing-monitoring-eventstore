const { createEvent } = require('../resources/events');

async function createEventMiddleware(req, res, next) {
  let event;
  try {
    event = await createEvent(req.body);
  }
  catch (err) {
    return next(err);
  }
  req.set('event', event);
  return next();
}

module.exports = createEventMiddleware;
