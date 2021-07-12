const express = require('express');
const routes = express.Router();

const UserController = require('../controllers/User.controller');
const SessionMiddlewares = require('../middlewares/Session.middleware');


routes.get('/', UserController.show);
routes.post('/', (req, res, next) => { req.isAdmin = false; next(); }, UserController.store);
routes.post('/admin/', SessionMiddlewares.isAdmin, (req, res, next) => { req.isAdmin = true; next(); }, UserController.store);
routes.put('/:id', UserController.update);
routes.delete('/:id', UserController.destroy);


module.exports = routes;
