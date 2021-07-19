const session = require('express-session');
const redis = require('redis');
const redisStore = require('connect-redis')(session);

require('dotenv').config();

const redisHostname = process.env.REDIS_HOSTNAME || 'localhost';

const sessionClient = redis.createClient({
    db: 0,
    host: redisHostname,
    port: '6379'
});

sessionClient.on('connect', () => {
    console.log('Session connected!');
});

sessionClient.on('error', (err) => {
    console.log('Redis error: ', err);
});

module.exports = {
    sessionStore: new redisStore({ client: sessionClient, ttl: 3600 }),
}