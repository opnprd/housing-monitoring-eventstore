var { InternalServerError } = require('restify-errors');
const debug = require('debug')('eventstore/middleware/setEventGeometry');
const { updateGeometry } = require('../resources/events');

async function setEventGeometry (req, res, next) {
  try {
    await updateGeometry(req.params.eventId, req.body);
  } catch(error) {
    req.log.error(error.message);
    return next(new InternalServerError(`Problem processing geometry update for ${req.params.eventId}`));
  }
  res.status(204);
  return next();
}

module.exports = setEventGeometry;