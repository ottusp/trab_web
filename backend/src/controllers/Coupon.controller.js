const Coupon = require('../models/Coupon');

module.exports = {
    async store(req, res) {
        const code = req.body.code;
        const uses = req.body.uses;

        try {
            var coupon = await Coupon.create({ code, uses });
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).end();
    },

    async check(req, res) {
        const code = req.body.code;

        try {
            var coupon = await Coupon.find({ code });
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        if (coupon.uses > 0) {
            coupon.uses -= 1;
            
            if (coupon.uses == 0) {
                try {
                    var coupon = await Coupon.delete({ code });
                } catch (err) {
                    console.log(err);
                    return res.status(500).end();
                }
            }
            else {
                try {
                    await coupon.save();
                } catch (err) {
                    console.log(err);
                    return res.status(500).end();
                }
            }
            
            return res.status(200).end();
        }
        else {
            return res.status(404).end();
        }
    }
}