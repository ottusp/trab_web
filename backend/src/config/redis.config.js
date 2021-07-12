const session = require('express-session');
const redis = require('redis');
const redisStore = require('connect-redis')(session);

const sessionClient = redis.createClient({
    db: 0,
    host: `localhost`,
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