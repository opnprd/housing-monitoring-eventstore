const config = require('config');
const server = require('./server');
const logger = require('./services/logger');

const queryEvents = require('./routes/api/query/events');
const querySchemes = require('./routes/api/query/schemes');
const queryEvent = require('./routes/api/query/event');
const updateEvents = require('./routes/api/update/events');
const updateEvent = require('./routes/api/update/event');
const swagger = require('./swagger');

queryEvents(server);
queryEvent(server);
querySchemes(server);
updateEvents(server);
updateEvent(server);
swagger(server);

server.listen(config.get('server.port'), function() {
  logger.info('%s listening at %s', server.name, server.url);
});