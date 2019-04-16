function eventToFeature(event) {
  const { eventId, type, ref, date, geometry } = event;
  return {
    type: 'Feature',
    properties: { eventId, type, ref, date },
    geometry,
  };
}

module.exports = {
  eventToFeature,
};
