const getEvent = require('../../../handlers/getEvent');
const getEventGeometry = require('../../../handlers/getEventGeometry');

module.exports = (server) => {
  /**
   * @swagger
   *
   * '/event/{urn}':
   *   get:
   *     tags:
   *       - query
   *       - event
   *     summary: Retrieve individual events by urn
   *     description: 
   *     parameters:
   *       -  $ref: "#/components/parameters/urnPath"
   *          example: a6e60083-338b-4b70-8085-55fa26490bcc
   *     responses:
   *       200:
   *         description: Event found
   *         content: 
   *           "application/json":
   *             schema:
   *               $ref: "#/components/schemas/eventSummary"
   */
  server.get('/event/:urn', getEvent);
  server.head('/event/:urn', getEvent);

  /**
   * @swagger
   *
   * '/event/{urn}/geometry':
   *   get:
   *     tags:
   *       - query
   *       - event
   *       - geojson
   *     summary: Retrieve individual events by urn as a GeoJSON feature
   *     description: 
   *     parameters:
   *       -  $ref: "#/components/parameters/urnPath"
   *          example: a6e60083-338b-4b70-8085-55fa26490bcc
   *     responses:
   *       200:
   *         description: Event found
   *         content: 
   *           "application/json":
   *             schema:
   *               $ref: "#/components/schemas/geojsonFeature"
   */
  server.get('/event/:urn/geometry', getEventGeometry);
  server.head('/event/:urn/geometry', getEventGeometry);
};
