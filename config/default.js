module.exports = {
  server: {
    port: 8000,
  },
  mongodb: {
    url: 'mongodb://localhost:27017/eventstore',
    options: {
      useNewUrlParser: true,
    },
  },
};
