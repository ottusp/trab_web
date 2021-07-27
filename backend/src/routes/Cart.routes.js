const express = require('express');
const routes = express.Router();

const CartController = require('../controllers/Cart.controller');

routes.get('/:userId', CartController.show);
routes.post('/:userId', CartController.addItem);

module.exports = routes;