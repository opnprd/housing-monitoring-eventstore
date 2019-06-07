const createEvent = require('../../../handlers/createEvent');

module.exports = (server) => {
  /**
   * @swagger
   *
   * /events:
   *   post:
   *     tags:
   *       - update
   *       - events
   *     summary: Add event to the event store.
   *     parameters: []
   *     requestBody:
   *       content:
   *         "application/json":
   *           schema:
   *             $ref: "#/components/schemas/eventDefinition"
   *       required: true
   *     responses:
   *       200:
   *         description: Created successfully
   *         content: 
   *           "application/json":
   *             schema:
   *               type: array
   *               items: 
   *                 $ref: "#/components/schemas/eventSummary"
   */
  server.post('/events', createEvent);
};
