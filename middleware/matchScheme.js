const { getOneEvent, updateEvent } = require('../resources/events');
const { createScheme, findSchemesInArea } = require('../resources/schemes');
const { InternalServerError } = require('restify-errors');

const debug = require('debug')('eventstore/middleware/matchScheme');

async function matchScheme(req, res, next) {
  const event = await getOneEvent(req.params.eventId, { eventId: 1, geometry: 1, scheme: 1 });

  let schemes;
  if (event.geometry) {
    debug('Searching for scheme by geometry');
    schemes = await findSchemesInArea(event.geometry);
  }

  if (schemes.length > 1) {
    const schemeIds = schemes.map(x => x.schemeId);
    req.log.warn(`Matched multiple schemes: ${schemeIds}`);
    return next();
  }

  if (schemes.length === 1) {
    debug('Matched existing scheme');
    // TODO merge geometries
    scheme = schemes[0];
  }

  if (schemes.length === 0) {
    debug('Creating new scheme');
    scheme = await createScheme({
      geometry: event.geometry,
    });
    debug(`Created scheme ${scheme.schemeId}`);
  }

  if (scheme === undefined) {
    return next(new InternalServerError('Problem creating new scheme'));
  }

  if (event.scheme && (event.scheme === scheme.schemeId)) {
    debug('Already assigned to this scheme');
    return next();
  }
  
  debug(`Updating Event ${event.eventId} with scheme ${scheme.schemeId}`);
  await updateEvent(event.eventId, { scheme: scheme.schemeId });

  return next();
}

module.exports = matchScheme;