const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    }
});

const CartItem = mongoose.model('CartItem', CartItemSchema);

module.exports = CartItem;