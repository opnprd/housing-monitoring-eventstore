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
   *     description: 
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
   *         allOf:
   *          - description: Internal server error
   *          - $ref: "#/components/responses/errorResponse"
   */
  server.put('/event/:eventId/geometry', setEventGeometry);
};
