const User = require('../models/User');

module.exports = {
    async show (req, res) {
        if (!req.query?.id) {
            return module.exports.showAll(req, res);
        }

        try {
            var user = await User.findById(req.query.id);
        } catch (err) {
            if (err.kind == "ObjectId") {
                return res.status(404).end();
            }
            console.log(err);
            return res.status(500).end();
        }
    },
    
    async showAll (req, res) {
        try {
            var users = await User.find({});
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).json(users);
    },

    async store (req, res) {
        let name = req.body?.name;
        let address = req.body?.address;
        let email = req.body?.email;
        let phone = req.body?.phone;
        let isAdmin = req.body?.isAdmin;
        let password = req.body?.password;

        try {
            var user = await User.create({ name, address, email, phone, isAdmin, password });
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }
        
        if (!user) {
            return res.status(500).end();
        }

        return res.status(200).end();
    },

    async update (req, res) {
        if (!req.params?.id) {
            return res.status(400).end();
        }

        try {
            var user = await User.findById(req.params.id);
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
        
        user.name = name;
        user.address = address;
        user.email = email;
        user.phone = phone;

        try {
            await user.save();
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).end();
    },

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
    }
}