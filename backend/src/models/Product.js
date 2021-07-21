const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true
    },
    picURL: {
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

module.exports = mongoose.model('Product', ProductSchema);