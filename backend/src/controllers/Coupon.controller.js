const Coupon = require('../models/Coupon');

module.exports = {
    // creates a coupon in database
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

    // uses the coupon
    async check(req, res) {
        const code = req.body.code;

        try {
            var coupon = await Coupon.find({ code });   // finds the coupon
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        if (!coupon) {
            return res.status(404).end();
        }

        if (coupon.uses > 0) {  //if the coupon can be used
            coupon.uses -= 1;   //uses it
            
            if (coupon.uses == 0) { //if it has no more uses left
                try {
                    var coupon = await Coupon.delete({ code }); //deletes the coupon
                } catch (err) {
                    console.log(err);
                    return res.status(500).end();
                }
            }
            else {
                try {
                    await coupon.save();    //saves the changes
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