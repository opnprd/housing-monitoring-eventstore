const config = require('config');
const bunyan = require('bunyan');

const log = bunyan.createLogger(config.get('logger'));

module.exports = log;