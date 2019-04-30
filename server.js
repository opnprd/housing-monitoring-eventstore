const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');

const logger = require('./services/logger');

const server = restify.createServer({
  name: 'housing-monitor-eventstore',
  log: logger,
});

const cors = corsMiddleware({
  origins: ['http://localhost:*'],
});

server.pre(restify.plugins.pre.context());
server.pre(cors.preflight);

server.use(restify.plugins.requestLogger());
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.gzipResponse());
server.use(cors.actual);

server.on('after', restify.plugins.auditLogger({event: 'after', log: logger}));

module.exports = server;

