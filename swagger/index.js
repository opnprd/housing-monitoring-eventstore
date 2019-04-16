const restifySwaggerJsdoc = require('restify-swagger-jsdoc-openapi3');

const schemas = require('./components/schemas');
const parameters = require('./components/parameters');
const responses = require('./components/responses');

const version = '0.1.0';
const path = './routes/api/**/*.js';
console.log(path);
const host = 'localhost';

module.exports = (server) => {
  restifySwaggerJsdoc.createSwaggerPage({
    title: 'EventStore API docs', // Page title (required)
    version: version, // Server version (required)
    server: server, // Restify server instance created with restify.createServer() (required)
    path: '/docs/api', // Public url where the swagger page will be available (required)
    description: 'Housing Monitoring Event Store', // A short description of the application. (default: '')
    tags: [
      { name: 'query', description: 'Query operations' },
      { name: 'update', description: 'Update operations' },
      { name: 'events', description: 'Operations on groups of events' },
      { name: 'event', description: 'Operations on individual event'},
      { name: 'geojson', description: 'Operations that return GeoJSON responses' },
    ], // A list of tags used by the specification with additional metadata (default: [])
    host: host, // The host (name or ip) serving the API. This MUST be the host only and does not include the scheme nor sub-paths.
    schemes: [], // The transfer protocol of the API. Values MUST be from the list: "http", "https", "ws", "wss". (default: [])
    apis: [ path ], // Path to the API docs (default: [])
    components: { schemas, parameters, responses }, // External definitions to add to swagger (default: [])
    routePrefix: '', // prefix to add for all routes (default: '')
    forceSecure: false // force swagger-ui to use https protocol to load JSON file (default: false)
  });  
}