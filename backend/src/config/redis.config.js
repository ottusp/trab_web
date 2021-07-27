const session = require('express-session');
const redis = require('redis');
const redisStore = require('connect-redis')(session);

require('dotenv').config();

const redisHostname = process.env.REDIS_HOSTNAME || 'localhost';

// create the session client that will be used to store passport/express session
const sessionClient = redis.createClient({
    db: 0,
    host: redisHostname,
    port: '6379'
});

// check for successful connection 
sessionClient.on('connect', () => {
    console.log('Session connected!');
});

// check if any error occurred
sessionClient.on('error', (err) => {
    console.log('Redis error: ', err);
});

// exports redis store with the session client created above to be used in express-session
module.exports = {
    sessionStore: new redisStore({ client: sessionClient, ttl: 3600 }),
}