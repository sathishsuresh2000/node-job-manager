const Queue = require('bull');
const redisOptions = require('./redisConnectionOptions');

const queue = new Queue('queue1', redisOptions);

queue.add({ data: 'job data' }, { attempts: 2, removeOnComplete: true, removeOnFail: true });
