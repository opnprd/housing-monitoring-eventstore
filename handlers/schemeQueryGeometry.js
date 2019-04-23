const schemesQuery = require('../middleware/schemesQuery');
const renderGeometry = require("../middleware/renderGeometry");
const { schemeToFeature } = require('../utils/geojson');
const send = require('../middleware/send');

module.exports = [
  schemesQuery,
  renderGeometry('schemes', schemeToFeature),
  send('schemes'),
];