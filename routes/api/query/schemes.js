const schemeQuery = require('../../../handlers/schemeQuery');
const schemeQueryGeometry = require('../../../handlers/schemeQueryGeometry');

module.exports = (server) => {
  /**
   * @swagger
   *
   * /schemes:
   *   get:
   *     tags:
   *       - query
   *       - schemes
   *     summary: Retrieve lists of schemes from the event store 
   *     description: 
   *     parameters:
   *       - $ref: "#/components/parameters/geometryIntersectsQuery"
   *     responses:
   *       200:
   *         description: Query performed successfully
   *         content: 
   *           "application/json":
   *             schema:
   *               type: array
   *               items: 
   *                 $ref: "#/components/schemas/schemeSummary"
   */
  server.get('/schemes', schemeQuery);
  server.head('/schemes', schemeQuery);

  /**
   * @swagger
   *
   * /schemes/geometry:
   *   get:
   *     tags:
   *       - query
   *       - schemes
   *       - geojson
   *     summary: Retrieve FeatureCollection of schemes from the event store 
   *     description:
   *     parameters:
   *       - $ref: "#/components/parameters/geometryIntersectsQuery"
   *     responses:
   *       200:
   *         description: Query performed successfully
   *         content: 
   *           "application/json":
   *             schema:
   *               type: array
   *               items: 
   *                 $ref: "#/components/schemas/geojsonFeatureCollection"
   */
  server.get('/schemes/geometry', schemeQueryGeometry);
  server.head('/schemes/geometry', schemeQueryGeometry);
};
