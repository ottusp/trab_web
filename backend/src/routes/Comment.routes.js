const express = require('express');
const routes = express.Router();

const CommentController = require('../controllers/Comment.controller');
const SessionMiddleares = require('../middlewares/Session.middleware');


routes.get('/', CommentController.show);
routes.post('/', CommentController.store);


module.exports = routes;