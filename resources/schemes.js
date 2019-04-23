const { v4 } = require('uuid');
const debug = require('debug')('eventstore/resources/schemes');
const mongodb = require('../services/mongo');

async function createScheme(data) {
  const mongoClient = await mongodb.connect();
  const schemes = mongoClient.db().collection('schemes');
  const result = await schemes.insertOne({ schemeId: v4(), ...data })
  return result.ops[0];
}
async function findSchemes(query={}, projection={}) {
  const mongoClient = await mongodb.connect();
  const schemes = mongoClient.db().collection('schemes');
  const results = await schemes.find(query, { projection: projection}).toArray();
  return results;
}

async function findSchemesInArea(geometry, projection={}) {
  const results = await findSchemes({ 'geometry': { $geoIntersects: { $geometry: geometry }}}, projection);
  return results;
}

module.exports = {
  createScheme,
  findSchemesInArea,
}
