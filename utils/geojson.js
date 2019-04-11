function eventToFeature(event) {
  const { eventId, type, date, geometry } = event;
  return {
    type: 'Feature',
    properties: { eventId, type, date },
    geometry,
  };
}

module.exports = {
  eventToFeature,
};
