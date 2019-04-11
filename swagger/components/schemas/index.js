const {
  geojsonFeature,
  geojsonFeatureCollection,
  geojsonGeometry,
  geojsonGeometryString
} = require('./geojson');

module.exports = {
  eventDate: {
    type: 'string',
    format: 'date-time',
    description: 'Datetime associated with the event. Typically, this will be a Date only (i.e. Time component will refer to zero)',
    example: '2018-03-05T00:00:00.000Z',
  },
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
      date: {
        $ref: '#/components/schemas/eventDate',
        required: true,
      }
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
  