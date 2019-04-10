const {
  geojsonFeature,
  geojsonFeatureCollection,
  geojsonGeometry,
  geojsonGeometryString
} = require('./geojson');

module.exports = {
  eventList: {
    type: 'array',
    items: { $ref: '#/components/schemas/eventSummary' },
  },
  eventSummary: {
    properties: {
      urn: {
        $ref: '#/components/schemas/urn',
      },
      type: {
        $ref: '#/components/schemas/eventType',
        required: true,
      },
    }
  },
  eventType: {
    enum: [
      'planningApproval',
      'councilTaxRegistration',
    ],
    example: 'planningApproval',
  },
  geojsonFeature, geojsonFeatureCollection, geojsonGeometry, geojsonGeometryString,
  urn: {
    type: 'string',
    example: 'a6e60083-338b-4b70-8085-55fa26490bcc',
  },
};
  