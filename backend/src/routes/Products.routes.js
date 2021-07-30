const express = require('express');
const routes = express.Router();

const multer = require('multer');

const ProductController = require('../controllers/Product.controller');
const SessionMiddlewares = require('../middlewares/Session.middleware');

// Create storage for an uploaded image, setting its destination folder and filename 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname+'-'+Date.now());
    }
});
var upload = multer({ storage: storage });

// Create routes for product functionalities
routes.get('/', ProductController.show);            // Get product(s)
routes.post('/', SessionMiddlewares.isAuth, SessionMiddlewares.isAdmin, ProductController.store);          // Create product
routes.post('/setImg/:id', SessionMiddlewares.isAuth, SessionMiddlewares.isAdmin, upload.single('img'), ProductController.updateImg);  // Set an image for a product
routes.put('/:id', SessionMiddlewares.isAuth, SessionMiddlewares.isAdmin, ProductController.update);       // Update a product
routes.delete('/:id', SessionMiddlewares.isAuth, SessionMiddlewares.isAdmin, ProductController.destroy);   // Remove a product


module.exports = routes;
