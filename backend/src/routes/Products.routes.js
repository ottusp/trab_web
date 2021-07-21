const express = require('express');
const routes = express.Router();

const multer = require('multer');

const ProductController = require('../controllers/Product.controller');
const SessionMiddleares = require('../middlewares/Session.middleware');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname+'-'+Date.now());
    }
});
var upload = multer({ storage: storage });


routes.get('/', ProductController.show);
routes.post('/', ProductController.store);
routes.post('/setImg/:id', upload.single('img'), ProductController.updateImg);
routes.put('/:id', ProductController.update);
routes.delete('/:id', ProductController.destroy);
routes.post('/sell/:id/', ProductController.sell);


module.exports = routes;
