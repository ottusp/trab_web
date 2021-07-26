const Product = require('../models/Product');

module.exports = {
    async show (req, res) {
        console.log("req.query: ", req.query);
        if (!req.query?.id && !req.query?.name) {
            return module.exports.showAll(req, res);
        }
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
        else {
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

    async showAll (req, res) {
        try {
            var products = await Product.find({});
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).json(products);
    },

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

        product.picURL = `http://localhost:3333/api/static/${req.file?.filename}`;

        try {
            await product.save();
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        return res.status(200).end();
    },

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

    async sell (req, res) {
        if (!req.params?.id) {
            return res.status(400).end();
        }

        let quantity = req.body?.id;

        if (!quantity) {
            return res.status(400).end();
        }

        try {
            var product = await Product.findById(req.params.id);
        } catch (err) {
            if (err.kind == "ObjectId") {
                return res.status(404).end();
            }
            console.log(err);
            return res.status(500).end();
        }

        if (!product) {
            return res.status(404).end();
        }

        product.inStock -= quantity;
        product.sold += quantity;
        
        try {
            await product.save();
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }
    }
}