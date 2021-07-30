const express = require('express');
const routes = express.Router();


const UserController = require('../controllers/User.controller');
const SessionMiddlewares = require('../middlewares/Session.middleware');

// Create routes for session functionalities
routes.post('/login', UserController.login);                                                            // Logs in the user
routes.post('/validate', SessionMiddlewares.isAuth, (req, res) => { return res.status(200).end() });    // Checks if the user is logged in (if the user has a session linked to him)
routes.post('/isAdmin', SessionMiddlewares.isAuth, SessionMiddlewares.isAdmin, (req, res) => { return res.status(200).end() }); // Checks if the user is Admin 


module.exports = routes;
