const eventQuery = require('../../../handlers/eventQuery');
const eventQueryGeometry = require('../../../handlers/eventQueryGeometry');

module.exports = (server) => {
  /**
   * @swagger
   *
   * /events:
   *   get:
   *     tags:
   *       - query
   *       - events
   *     summary: Retrieve lists of events from the event store 
   *     description: 
   *     parameters:
   *       - $ref: "#/components/parameters/eventTypeQuery"
   *       - $ref: "#/components/parameters/geometryIntersectsQuery"
   *     responses:
   *       200:
   *         description: Query performed successfully
   *         content: 
   *           "application/json":
   *             schema:
   *               $ref: "#/components/schemas/eventList"
   */
  server.get('/events', eventQuery);
  server.head('/events', eventQuery);

  /**
   * @swagger
   *
   * /events/geometry:
   *   get:
   *     tags:
   *       - query
   *       - events
   *       - geojson
   *     summary: Retrieve FeatureCollection of events from the event store 
   *     description:
   *     parameters:
   *       - $ref: "#/components/parameters/eventTypeQuery"
   *       - $ref: "#/components/parameters/geometryIntersectsQuery"
   *     responses:
   *       200:
   *         description: Query performed successfully
   *         content: 
   *           "application/json":
   *             schema:
   *               $ref: "#/components/schemas/geojsonFeatureCollection"
   */
  server.get('/events/geometry', eventQueryGeometry);
  server.head('/events/geometry', eventQueryGeometry);
};
