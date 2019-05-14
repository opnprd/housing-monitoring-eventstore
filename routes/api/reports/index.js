const schemeReport = require('../../../handlers/schemeReport');

module.exports = (server) => {
  /**
   * @swagger
   *
   * '/reports/schemes':
   *   get:
   *     tags:
   *       - report
   *       - schemes
   *     summary: Retrieve summary of all schemes
   *     description: 
   *     responses:
   *       200:
   *         description: Events report
   *         content: 
   *           "application/json":
   *             schema: []
   */
  server.get('/reports/schemes', schemeReport);
  server.head('/reports/schemes', schemeReport);

}