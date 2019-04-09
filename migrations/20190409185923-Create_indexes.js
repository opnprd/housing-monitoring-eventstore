module.exports = {
  async up(db) {
    const events = db.collection('events');
    await events.createIndex({ type: 'hashed' }, { name: 'type' });
    await events.createIndex({ urn: 1 }, { name: 'urn', unique: true });
  },

  async down(db) {
  }
};
