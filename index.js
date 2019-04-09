const config = require('config');
const server = require('./server');
const logger = require('./services/logger');

const eventQuery = require('./handlers/eventQuery');
const getEvent = require('./handlers/getEvent');

server.get('/events', eventQuery);
server.head('/events', eventQuery);
server.get('/event/:urn', getEvent);
server.head('/event/:urn', getEvent);

server.listen(config.get('server.port'), function() {
  logger.info('%s listening at %s', server.name, server.url);
});