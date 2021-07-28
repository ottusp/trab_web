const User = require('../models/User');
const Cart = require('../models/Cart/Cart');

module.exports = {
    // function to show users from database
    async show (req, res) {
        if (!req.query?.id) { //if no id was passed through query params, it returns all users in database
            return module.exports.showAll(req, res);
        }

        try {
            var user = await User.findById(req.query.id).populate('Cart');   // finds an user and returns it
        } catch (err) {
            if (err.kind == "ObjectId") {
                return res.status(404).end();
            }
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).json(user);
    },
    
    // shows all users in database
    async showAll (req, res) {
        try {
            var users = await User.find({}).populate('Cart');
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).json(users);
    },

    // creates an user in database
    async store (req, res) {
        let name = req.body?.name;
        let address = req.body?.address;
        let email = req.body?.email;
        let phone = req.body?.phone;
        let isAdmin = req.body?.isAdmin;
        let password = req.body?.password;
        let cart = await Cart.create({});

        try {
            var user = await User.create({ name, address, email, phone, isAdmin, password, cart: cart._id });
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }
        
        if (!user) {
            return res.status(500).end();
        }

        return res.status(200).json(user);
    },

    // updates an user's info. the user is identified using its id passed through url params
    async update (req, res) {
        if (!req.params?.id) {
            return res.status(400).end();
        }

        try {
            var user = await User.findById(req.params.id);  //finds the user
        } catch (err) {
            if (err.kind == "ObjectId") {
                return res.status(404).end();
            }
            console.log(err);
            return res.status(500).end();
        }

        let name = req.body?.name;
        let address = req.body?.address;
        let email = req.body?.email;
        let phone = req.body?.phone;
        
        // updates the user's infos
        user.name = name;
        user.address = address;
        user.email = email;
        user.phone = phone;

        try {
            await user.save();  // save the changes
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).end();
    },

    // deletes an user from database
    async destroy (req, res) {
        if (!req.params?.id) {
            return res.status(400).end();
        }

        try {
            await User.deleteOne({ _id: id });
        } catch (err) {
            if (err.kind == "ObjectId") {
                return res.status(200).end();
            }
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).end();
    },

    // verifies if the email and password passed in req matches with the ones stored in database for that user
    // this function is used in passport login and session creation logic
    async verifyLogin (email, password, cb) {
        if (!email || !password) {
            return cb(null, null);
        }

        try {
            var user = await User.findOne({ email });
        } catch (err) {
            console.log(err);
            return cb(err, null);
        }

        if (!user) {
            return cb(null, null);
        }

        if (password === user.password) {
            return cb(null, user);
        }
        else {
            return cb(null, null);
        }
    },

    async getLoginInfo (req, res) {
        try {
            var user = await User.findOne({ email: req.body.email }).select("name");
        } catch (err) {
            return res.status(500).end();
        }

        return res.status(200).json(user);
    }
}