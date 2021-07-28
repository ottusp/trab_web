const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const UserRoutes = require('./routes/User.routes');
const ProductRoutes = require('./routes/Products.routes');
const SessionRoutes = require('./routes/Session.routes');
const CommentRoutes = require('./routes/Comment.routes');
const CartRoutes = require('./routes/Cart.routes');


require('dotenv').config();

const mongodb_user = "trabweb";
const mongodb_password = "senhatopper";

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
mongoose.connect(`mongodb+srv://${mongodb_user}:${mongodb_password}@cluster0.fbolq.mongodb.net/hungryPoints?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Start express-session
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
    secret: 'secret_topper',
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.fbolq.mongodb.net/hungryPoints?retryWrites=true&w=majority`,
        ttl: 60*60*4,
        autoRemove: 'native'
    }),
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
app.use('/api/comment', CommentRoutes);
app.use('/api/cart', CartRoutes);

console.log(path.join(__dirname))
app.use(express.static(path.join(__dirname, '..', 'build')));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

port = process.env.PORT || 80;

// Start server
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});