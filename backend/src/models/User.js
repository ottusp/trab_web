const mongoose = require('mongoose');

// Create a schema for users (some properties are self explanatory)
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30,
    },
    address: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) { // Validates the user's email against the following regex
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email`
        },
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        maxlength: 20
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    password: {
        type: String,
        required: true,
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    }
});

// Link the user schema to a model
module.exports = mongoose.model('User', UserSchema);