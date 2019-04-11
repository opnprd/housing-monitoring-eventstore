module.exports = {
  async up(db) {
    const events = db.collection('events');
    await events.createIndex({ type: 'hashed' });
    await events.createIndex({ eventId: 1 }, { unique: true });
    await events.createIndex({ geometry: "2dsphere" });
  },

  async down(db) {
  }
};
