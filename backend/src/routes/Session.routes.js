const express = require('express');
const routes = express.Router();

const passport = require('passport');
require('../config/passport.config')(passport);

const SessionMiddlewares = require('../middlewares/Session.middleware');

// Create routes for session functionalities
// This route uses passport local-strategy authentication to log in the user
routes.post('/login', passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/login',
}));    // Login the user
routes.post('/validate', SessionMiddlewares.isAuth, (req, res) => { return res.status(200).end() });    // Check if the user is logged in (if the user has a session linked to him)
routes.post('/logout', (req, res) => { req.logOut(); return res.status(200).end(); })                   // Log out the user



module.exports = routes;
