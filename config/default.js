const defer = require('config/defer').deferConfig;

function constructMongoString() {
  return `mongodb://${this.mongodb.host}:${this.mongodb.port}/${this.mongodb.db}`;
}

module.exports = {
  server: {
    port: 8000,
  },
  logger: {
    name: 'eventstore',
  },
  mongodb: {
    host: 'localhost',
    port: 27017,
    db: 'eventstore',
    url: defer(constructMongoString),
    options: {
      useNewUrlParser: true,
      poolSize: 50,
    },
  },
};
