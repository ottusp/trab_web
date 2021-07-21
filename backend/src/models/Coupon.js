const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    uses: {
        type: Number,
        min: 0
    }
});

module.exports = mongoose.model('Coupon', CouponSchema);