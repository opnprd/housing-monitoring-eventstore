const { aggregateSchemes } = require('../resources/reports');

async function aggregateSchemesMiddleware(req, res, next) {
  let result;
  try {
    result = await aggregateSchemes();
  } catch(err) {
    return next(err);
  }
  req.set('report', result);
  return next();
}

module.exports = aggregateSchemesMiddleware;