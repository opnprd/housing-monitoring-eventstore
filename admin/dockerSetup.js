const setupMongo = require('./mongodb/configure');

setupMongo().then(() => console.log('Finished mongo setup'));
