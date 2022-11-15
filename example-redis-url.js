require('dotenv').config();
const Redis = require('ioredis');

const { REDIS_URL } = process.env;

// Recommended to use this method for connecting to Render Redis,
// as this value can be set automatically by Render Blueprints

const renderRedis = new Redis(REDIS_URL);

console.log('Connected to Render Redis! 🚀');
renderRedis.xadd('test', '*', 'key', 'KEY', 'value', 'VALUE');
renderRedis.xrange('test', '-', '+').then((result) => {
  console.log(`Result for key test: ${result}`);
});
console.log(renderRedis.type('test'));
renderRedis.set('animal', 'cat');

renderRedis.get('animal').then((result) => {
  console.log(`Result for key animal: ${result}`); // Prints "cat"
});

renderRedis.del('animal');
