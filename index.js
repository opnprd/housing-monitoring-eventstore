const config = require('config');
const server = require('./server');
const logger = require('./services/logger');

const eventQuery = require('./handlers/eventQuery');
const eventQueryGeometry = require('./handlers/eventQueryGeometry');
const getEvent = require('./handlers/getEvent');
const getEventGeometry = require('./handlers/getEventGeometry');

server.get('/events', eventQuery);
server.head('/events', eventQuery);
server.get('/events/geometry', eventQueryGeometry);
server.head('/events/geometry', eventQueryGeometry);
server.get('/event/:urn', getEvent);
server.head('/event/:urn', getEvent);
server.get('/event/:urn/geometry', getEventGeometry);
server.head('/event/:urn/geometry', getEventGeometry);

server.listen(config.get('server.port'), function() {
  logger.info('%s listening at %s', server.name, server.url);
});