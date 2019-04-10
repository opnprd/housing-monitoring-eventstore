const config = require('config');
const server = require('./server');
const logger = require('./services/logger');

const queryEvents = require('./routes/api/query/events');
const queryEvent = require('./routes/api/query/event');
const swagger = require('./swagger');

queryEvents(server);
queryEvent(server);
swagger(server);

server.listen(config.get('server.port'), function() {
  logger.info('%s listening at %s', server.name, server.url);
});