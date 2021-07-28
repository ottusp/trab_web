const express = require('express');
const routes = express.Router();

const multer = require('multer');

const ProductController = require('../controllers/Product.controller');
const SessionMiddleares = require('../middlewares/Session.middleware');

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
routes.post('/', ProductController.store);          // Create product
routes.post('/setImg/:id', upload.single('img'), ProductController.updateImg);  // Set an image for a product
routes.put('/:id', ProductController.update);       // Update a product
routes.delete('/:id', ProductController.destroy);   // Remove a product


module.exports = routes;
