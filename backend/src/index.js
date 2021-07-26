const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const UserRoutes = require('./routes/User.routes');
const ProductRoutes = require('./routes/Products.routes');
const SessionRoutes = require('./routes/Session.routes');

const redis = require('./config/redis.config');

require('dotenv').config();

const mongoHostname = process.env.MONGO_HOSTNAME || 'localhost';

const app = express();

// Allow CORS for frontend
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

// Allow folder to be accessed from frontend
app.use('/api/static', express.static(path.join(__dirname, 'public')));

app.use(express.json());

// Connect to mongodb database
mongoose.connect(`mongodb://${mongoHostname}:27017/hungrypoints`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Start express-session with Redis
app.use(session({
    resave: true,
    name: "hungrySession",
    saveUninitialized: true,
    cookie: {
        secure: false, 
        httpOnly: false, 
        sameSite: 'strict', 
        maxAge: 3600000 
    },
    secret: `teste_secret_mudar_depois`,
    store: redis.sessionStore,
}));
// Initialize passport with sessions
app.use(passport.initialize());
app.use(passport.session());


// Log request info
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

// Set routes
app.use('/api/user', UserRoutes);
app.use('/api/product', ProductRoutes);
app.use('/api/session', SessionRoutes);

// Start server
app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
})