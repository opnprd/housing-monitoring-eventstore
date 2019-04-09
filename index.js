const restify = require('restify');
const config = require('config');

const eventQuery = require('./handlers/eventQuery');

var server = restify.createServer();
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.gzipResponse());

server.get('/events', eventQuery);
server.head('/events', eventQuery);

server.listen(config.get('server.port'), function() {
  console.log('%s listening at %s', server.name, server.url);
});