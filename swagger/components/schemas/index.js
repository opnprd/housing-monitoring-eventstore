const {
  geojsonFeature,
  geojsonFeatureCollection,
  geojsonGeometry,
  geojsonGeometryString
} = require('./geojson');

module.exports = {
  eventBase: {
    properties: {
      type: {
        $ref: '#/components/schemas/eventType',
        required: true,
      },
      date: {
        $ref: '#/components/schemas/eventDate',
        required: true,
      },
      ref: {
        $ref: '#/components/schemas/eventRef',
      },  
    },
  },
  eventData: {
    type: 'object',
    description: 'Unconstrained object containing additional event data. Will vary significanyly per event type.'
  },
  eventDate: {
    type: 'string',
    format: 'date-time',
    description: 'Datetime associated with the event. Typically, this will be a Date only (i.e. Time component will be zero)',
    example: '2018-03-05T00:00:00.000Z',
  },
  eventDefinition: {
    allOf: [
      {
        $ref: '#/components/schemas/eventBase',
      },
      {
        properties: {
          eventData: {
            $ref: '#/components/schemas/eventData',
          },
        },
      },
    ],
  },
  eventSummary: {
    allOf: [
      {
        properties: {
          eventId: {
            type: 'string',
            format: 'uuid',
            example: 'a6e60083-338b-4b70-8085-55fa26490bcc',
          },
        },
      },
      {
        $ref: "#/components/schemas/eventBase",
      },
    ],
  },
  eventRef: {
    type: 'string',
    description: 'External reference for the event. This will depend on the source system.',
  },
  eventType: {
    type: 'string',
    enum: [
      'planningPermission',
      'councilTaxRegistration',
    ],
    example: 'planningPermission',
  },
  geojsonFeature, geojsonFeatureCollection, geojsonGeometry, geojsonGeometryString,
  schemeSummary: {
    type: 'object',
    properties: {
      schemeId: {
        type: 'string',
        format: 'uuid',
        required: true,
      }
    }
  },
};
  