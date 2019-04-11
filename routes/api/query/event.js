const getEvent = require('../../../handlers/getEvent');
const getEventGeometry = require('../../../handlers/getEventGeometry');

module.exports = (server) => {
  /**
   * @swagger
   *
   * '/event/{id}':
   *   get:
   *     tags:
   *       - query
   *       - event
   *     summary: Retrieve individual events by eventId
   *     description: 
   *     parameters:
   *       - allOf:
   *         - $ref: "#/components/parameters/idPath"
   *         - example: a6e60083-338b-4b70-8085-55fa26490bcc
   *     responses:
   *       200:
   *         description: Event found
   *         content: 
   *           "application/json":
   *             schema:
   *               $ref: "#/components/schemas/eventSummary"
   */
  server.get('/event/:eventId', getEvent);
  server.head('/event/:eventId', getEvent);

  /**
   * @swagger
   *
   * '/event/{id}/geometry':
   *   get:
   *     tags:
   *       - query
   *       - event
   *       - geojson
   *     summary: Retrieve individual events by eventId as a GeoJSON feature
   *     description: 
   *     parameters:
   *       - allOf:
   *         - $ref: "#/components/parameters/idPath"
   *         - example: a6e60083-338b-4b70-8085-55fa26490bcc
   *     responses:
   *       200:
   *         description: Event found
   *         content: 
   *           "application/json":
   *             schema:
   *               $ref: "#/components/schemas/geojsonFeature"
   */
  server.get('/event/:eventId/geometry', getEventGeometry);
  server.head('/event/:eventId/geometry', getEventGeometry);
};
