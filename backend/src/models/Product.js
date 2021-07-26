const mongoose = require('mongoose');

// Create a schema for products (some properties are self explanatory)
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true
    },
    picURL: {   //The URL from where the frontend can get the object image
        type: String,
    },
    description: {
        type: String,
        required: true,
        maxlength: 200
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    inStock: {
        type: Number,
        required: true,
        min: 0,
    },
    sold: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    }
});

// Link the product schema to a model
module.exports = mongoose.model('Product', ProductSchema);