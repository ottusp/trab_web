const express = require('express');
const routes = express.Router();

const UserController = require('../controllers/User.controller');
const SessionMiddlewares = require('../middlewares/Session.middleware');

// Creates routes for user functionalities
routes.get('/', UserController.show);   // Get user(s)
routes.post('/', (req, res, next) => { req.isAdmin = false; next(); }, UserController.store);   // Create users
routes.post('/admin/', SessionMiddlewares.isAuth, SessionMiddlewares.isAdmin, (req, res, next) => { req.isAdmin = true; next(); }, UserController.store);  // Create admin users (only a admin can create another admin)
routes.put('/:id', UserController.update);      // Update an user
routes.delete('/:id', UserController.destroy);  // Delete an user


module.exports = routes;
