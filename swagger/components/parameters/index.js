module.exports = {
  eventTypeQuery: {
    name: 'type',
    in: 'query',
    description: 'Type of event to return',
    schema: { $ref: '#/components/schemas/eventType' },
  },
  geometryIntersectsQuery: {
    name: 'intersects',
    in: 'query',
    description: 'Geographic area to test for intersections',
    schema: { $ref: "#/components/schemas/geojsonGeometryString" },
    example: '{"type":"Polygon","coordinates":[[[-1.53905,53.79726],[-1.53709,53.79726],[-1.53709,53.79804],[-1.53905,53.79804],[-1.53905,53.79726]]]}',
  },
  urnPath: {
    name: 'urn',
    description: 'urn of the object to retrieve',
    in: 'path',
    required: true,
    schema: { $ref: "#/components/schemas/urn" },
  }
};
