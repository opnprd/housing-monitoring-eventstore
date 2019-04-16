module.exports = {
  async up(db) {
    const events = db.collection('events');
    await events.createIndex({ ref: 1 });
  },

  async down(db) {
    const events = db.collection('events');
    await events.dropIndex({ ref: 1 });
  }
};
