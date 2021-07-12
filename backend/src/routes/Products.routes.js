const express = require('express');
const routes = express.Router();

const ProductController = require('../controllers/Product.controller');
const SessionMiddleares = require('../middlewares/Session.middleware');


routes.get('/', ProductController.show);
routes.post('/', ProductController.store);
routes.put('/:id', ProductController.update);
routes.delete('/:id', ProductController.destroy);
routes.post('/sell/:id/', ProductController.sell);


module.exports = routes;
