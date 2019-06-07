const setEventGeometry = require('../../../handlers/setEventGeometry');

module.exports = (server) => {
  /**
   * @swagger
   *
   * '/event/{id}/geometry':
   *   put:
   *     tags:
   *       - update
   *       - event
   *       - geojson
   *     summary: Replace the geometry for an individual event
   *     parameters: 
   *      - $ref: "#/components/parameters/idPath"
   *     requestBody:
   *       content:
   *         "application/json":
   *           schema:
   *             $ref: "#/components/schemas/geojsonGeometry"
   *       required: true
   *     responses:
   *       204:
   *         description: Update accepted
   *       500:
   *         $ref: "#/components/responses/errorResponse"
   */
  server.put('/event/:eventId/geometry', setEventGeometry);
};
