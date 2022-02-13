const Redis = require('ioredis');
const redisConfig = {
      port: 6379,
      host: '127.0.0.1'
    },;

let client;
let subscriber;

const redisOptions = {
  // redisOpts here will contain at least a property of connectionName which will identify the queue based on its name
  createClient: function (type, options) {
    switch (type) {
      case 'client':
        if (!client) {
          client = new Redis(redisConfig, options);
        }
        return client;
      case 'subscriber':
        if (!subscriber) {
          subscriber = new Redis(redisConfig, options);
        }
        return subscriber;
      case 'bclient':
        return new Redis(redisConfig, options);
      default:
        throw new Error('Unexpected connection type: ', type);
    }
  },
};

module.exports = redisOptions;
