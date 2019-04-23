const parseQueryString = require('../utils/parseQueryString');

const { findSchemes } = require('../resources/schemes');

const keyMap = {
  intersects: 'geometry',
};

// TODO move this to external module
const inflater = (key, value) => {
  if ( key === 'intersects' ) {
    return { $geoIntersects: { $geometry: JSON.parse(value) } };
  };
  return value;
};

async function schemesQuery(req, res, next) {
  const query = parseQueryString(req.query, keyMap, inflater);

  const projection = req.get('projection');
  const schemes = await findSchemes(query, projection);

  req.set('schemes', schemes);

  return next();
}

module.exports = schemesQuery;
