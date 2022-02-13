const Queue = require('bull');
const redisOptions = require('./redisConnectionOptions');

const queue = new Queue('queue1', redisOptions);

queue.process(10, (job)=>{
  console.log(job.data);
  return Promise.resolve();
});
