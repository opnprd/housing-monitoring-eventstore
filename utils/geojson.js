function eventToFeature(event) {
  const { urn, type, geometry } = event;
  return {
    type: 'Feature',
    properties: { urn, type },
    geometry,
  };
}

module.exports = {
  eventToFeature,
};
