const mongoose = require('mongoose');

// Create a schema for coupons
const CouponSchema = new mongoose.Schema({
    code: { // Code that identifies the coupon
        type: String,
        required: true,
        unique: true,
    },
    uses: { // Number of uses remaining 
        type: Number,
        min: 0
    }
});

// Link the coupon schema to a model
module.exports = mongoose.model('Coupon', CouponSchema);