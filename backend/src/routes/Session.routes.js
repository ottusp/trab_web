const express = require('express');
const routes = express.Router();

const passport = require('passport');
require('../config/passport.config')(passport);

const SessionMiddlewares = require('../middlewares/Session.middleware');

routes.post('/login', passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/login',
}));
routes.post('/validate', SessionMiddlewares.isAuth, (req, res) => { return res.status(200).end() });
routes.post('/logout', (req, res) => { req.logOut(); return res.status(200).end(); })



module.exports = routes;
