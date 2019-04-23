function renderGeometry(itemName, mapper) {
  return (req, res, next) => {
    const data = req.get(itemName);
    const featureCollection = {
      type: 'FeatureCollection',
      features: data.map(mapper)
    };
    req.set(itemName, featureCollection);
    return next();
  };
}
module.exports = renderGeometry;
