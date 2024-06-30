import { createClient } from 'redis';
import config from 'config';

const redisConfig = config.get('redis');

const redisClient = createClient({
  url: `redis://${redisConfig.host}:${redisConfig.port}`,
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

(async () => {
  await redisClient.connect();
})();

export default redisClient;
