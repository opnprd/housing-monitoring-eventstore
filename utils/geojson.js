function eventToFeature(event) {
  const { eventId, type, ref, date, geometry } = event;
  return {
    type: 'Feature',
    properties: { eventId, type, ref, date },
    geometry,
  };
}

function schemeToFeature(scheme) {
  const { schemeId, geometry} = scheme;
  return {
    type: 'Feature',
    properties: { schemeId },
    geometry,
  };

}

module.exports = {
  eventToFeature,
  schemeToFeature,
};
