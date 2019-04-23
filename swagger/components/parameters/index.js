module.exports = {
  eventTypeQuery: {
    name: 'type',
    in: 'query',
    description: 'Event type return',
    schema: { $ref: '#/components/schemas/eventType' },
  },
  geometryIntersectsQuery: {
    name: 'intersects',
    in: 'query',
    description: 'Geographic area to test for intersections',
    schema: { $ref: "#/components/schemas/geojsonGeometryString" },
    example: '{"type":"Polygon","coordinates":[[[-1.53905,53.79726],[-1.53709,53.79726],[-1.53709,53.79804],[-1.53905,53.79804],[-1.53905,53.79726]]]}',
  },
  idPath: {
    name: 'id',
    description: 'Object id',
    in: 'path',
    required: true,
    schema: {
      type: 'string',
      format: 'uuid',
    },
  },
  refQuery: {
    name: 'ref',
    in: 'query',
    description: 'Event reference from external source',
    schema: { type: 'string' },
  },
  schemeQuery: {
    name: 'scheme',
    in: 'query',
    description: 'Scheme identifier',
    schema: { type: 'string' },
  },
};
