const restify = require('restify');

const server = restify.createServer();

server.use(restify.plugins.requestLogger());
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.gzipResponse());

module.exports = server;

