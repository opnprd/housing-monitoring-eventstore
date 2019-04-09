const restify = require('restify');
const logger = require('./services/logger');

const server = restify.createServer({
  name: 'housing-monitor-eventstore',
  log: logger,
});

server.use(restify.plugins.requestLogger());
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.gzipResponse());

server.on('after', restify.plugins.auditLogger({event: 'after', log: logger}));

module.exports = server;

