module.exports = async function(collection) {
  await collection.createIndex( { urn: 1 }, { name: 'urn', unique: true } );
}