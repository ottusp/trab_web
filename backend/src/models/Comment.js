const mongoose = require('mongoose');
//Schema for comments
const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    content: {
        type: String,
        required: true,
        maxlength: 500
    }
});

module.exports = mongoose.model('Comment', CommentSchema);