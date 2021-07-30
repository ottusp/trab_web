const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

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

port = process.env.PORT || 3333;

// Start server
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});