const mongodb = require('../services/mongo');

const aggregationPipeline = [
    {
      '$lookup': { from: 'events', localField: 'schemeId', foreignField: 'scheme', as: 'events' }
    },
    {
      '$addFields': {
        planningEvents: {
          '$filter': {
            input: '$events', as: 'ev', cond: {
              '$eq': [
                '$$ev.type', 'planningPermission'
              ]
            }
          }
        }
      }
    },
    {
      '$project': {
        schemeId: '$schemeId', 
        planDate: { '$max': '$planningEvents.date' }, 
        planText: { '$map': { input: '$planningEvents', as: 'ev', in: '$$ev.eventData.summary' } }, 
        occupationDates: {
          '$map': {
            input: {
              '$filter': {
                input: '$events', 
                as: 'ev', 
                cond: { '$eq': [ '$$ev.type', 'councilTaxRegistration' ] }
              }
            }, 
            as: 'ev', 
            in: '$$ev.date'
          }
        }
      }
    }
];

const aggregationOptions = {};

async function aggregateSchemes() {
  const mongoClient = await mongodb.connect();
  const schemes = mongoClient.db().collection('schemes');
  const results = await schemes.aggregate(aggregationPipeline, aggregationOptions).toArray();
  return results;
}

module.exports = {
  aggregateSchemes,
};