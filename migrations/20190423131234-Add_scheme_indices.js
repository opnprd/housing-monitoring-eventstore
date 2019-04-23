module.exports = {
  async up(db) {
    const schemes = db.collection('schemes');
    await schemes.createIndex({ schemeId: 1 });
    await schemes.createIndex({ geometry: '2dsphere' });
  },

  async down(db) {
    const schemes = db.collection('schemes');
    await schemes.dropIndex({ schemeId: 1 });
    await schemes.dropIndex({ geometry: '2dsphere' });
  }};
