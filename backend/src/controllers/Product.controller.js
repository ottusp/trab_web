const Product = require('../models/Product');

module.exports = {
    // shows products in database
    async show (req, res) {
        if (!req.query?.id && !req.query?.name) { // if no id or name is passed through query params, it shows all products in database
            return module.exports.showAll(req, res);
        }

        // if a id is passed, it shows a product based on id
        if (req.query.id) {
            try {
                var product = await Product.findById(req.query?.id);
            } catch (err) {
                if (err.kind == "ObjectId") {
                    return res.status(404).end();
                }
                console.log(err);
                return res.status(500).end();
            }
        }
        else {  // else it shows a product by name using regex. returns all products where the name passed is a substring of the real name
            try {
                var product = await Product.find({ name: { "$regex": req.query.name, "$options": "i" } });
            } catch (err) {
                console.log(err);
                return res.status(500).end();
            }
        }
        

        if (!product) {
            return res.status(404).end();
        }

        return res.status(200).json(product);
    },

    // shows all products in database
    async showAll (req, res) {
        try {
            var products = await Product.find({});
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).json(products);
    },

    // creates a product in database
    async store (req, res) {
        let name = req.body?.name;
        let description = req.body?.description;
        let price = req.body?.price;
        let inStock = req.body?.inStock;

        try {
            var product = await Product.create({ name, description, price, inStock });
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        if (!product) {
            return res.status(500).end();
        }

        return res.status(201).json(product);
    },

    // updates the image related to a product
    async updateImg (req, res) {
        if (!req.file) {
            return res.status(200).end();
        }

        try {
            var product = await Product.findById(req.params?.id);
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        if (!product) {
            return res.status(404).end();
        }

        product.picURL = `https://hungrypoints.herokuapp.com/api/static/${req.file?.filename}`;

        try {
            await product.save();
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).end();
    },

    // updates all the info of a product but its image
    async update (req, res) {
        if (!req.params?.id) {
            return res.status(400).end();
        }

        try {
            var product = await Product.findById(req.params?.id);
        } catch (err) {
            if (err.kind == "ObjectId") {
                return res.status(404).end();
            }
            console.log(err);
            return res.status(500).end();
        }

        let name = req.body?.name;
        let description = req.body?.description;
        let price = req.body?.price;
        let inStock = req.body?.inStock;
        
        product.name = name;
        product.description = description;
        product.price = price;
        product.inStock = inStock;

        try {
            await product.save();
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).end();
    },

    // deletes a product from the database
    async destroy (req, res) {
        if (!req.params?.id) {
            return res.status(400).end();
        }

        try {
            await Product.deleteOne({ _id: req.params.id });
        } catch (err) {
            if (err.kind == "ObjectId") {
                return res.status(200).end();
            }
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).end();
    },
}