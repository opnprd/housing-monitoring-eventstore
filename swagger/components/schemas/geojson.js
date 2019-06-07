module.exports = {
  geojsonFeature: {
    $ref: 'http://geojson.org/schema/Feature.json',
  },
  geojsonFeatureCollection: {
    $ref: 'http://geojson.org/schema/FeatureCollection.json',
  },
  geojsonGeometry: {
    allOf: [
      { $ref: 'http://geojson.org/schema/Geometry.json' },
      {
        example: {
          type: 'Polygon',
          coordinates: [[[-1.53905, 53.79726], [-1.53709, 53.79726], [-1.53709, 53.79804], [-1.53905, 53.79804], [-1.53905, 53.79726]]],
        }    
      }
    ]
  },
  geojsonGeometryString: {
    type: 'string',
    description: 'A string version of a GeoJSON Geometry. It is advisable to strip spaces out where possible.'
  },
};
