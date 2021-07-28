const express = require('express');
const routes = express.Router();

const CartController = require('../controllers/Cart.controller');

routes.get('/:userId', CartController.show);
routes.post('/:userId', CartController.addItem);
routes.put('/:userId', CartController.purchase);

module.exports = routes;