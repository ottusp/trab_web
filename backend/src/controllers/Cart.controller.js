const Cart = require('../models/Cart/Cart');
const CartItem = require('../models/Cart/CartItem');
const User = require('../models/User');
const Product = require('../models/Product');

/**
 * Function for retriving the purchase cart, given a userId passed by params
 */
const show = async (req, res) => {
    const userId = req.params?.userId;
    if(!userId) {
        return res.status(400).end();
    }
    
    try {
        var user = await User.findById(userId);
    } catch (err) {
        console.log(err);
        return res.status(500).end();
    }

    if(!user) {
        return res.status(400).end();
    }

    try {
        var cart = await Cart.findById(user.cart).populate({
            path: "products",
            populate: "product"
        });
    } catch (err) {
        console.log(err);
        return res.status(500).end();
    }
    
    return res.status(200).json(cart);
}

/**
 * Function for adding an item to cart
 * Params: 
 *  userId: the ID of the corresponding User
 * 
 * Body:
 *  A JSON containing the product Id and the product quantity selected
 */
const addItem = async (req, res) => {
    const userId = req.params?.userId;
    if (!userId) {
        return res.status(400).end();
    }

    try {
        var user = await User.findById(userId).populate({
            path: "cart",
            populate: {
                path: "products",
                populate: "product"
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).end();
    }

    if(!user) {
        return res.status(400).send('User not found');
    }

    if(!user.cart) {
        try {
            const cart = Cart.create({});
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        user.cart = cart._id;

        try {
            await user.save();
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }
    }

    const productId = req.body?.productId;
    const quantity = req.body?.productQuantity;

    let _product = null;
    user.cart.products.forEach((product) => {
        if(product.product._id == productId) {
            product.quantity += quantity;
            
            _product = product;
            return;
        }
    });

    if(_product) {
        try {
                await _product.save();
            } catch (err) {
                console.log(err);
                return res.status(500).end();
        }
    } else {
        try {
            var product = await Product.findById(productId);
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }
        
        try {
            const cartItem = await CartItem.create({
                product: product._id,
                quantity: quantity
            });
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }
        
        user.cart.products.push(cartItem);
    }

    try {
        await user.cart.save();
    } catch (err) {
        console.log(err);
        return res.status(500).end();
    }
        

    return res.status(201).json(user.cart);
}

/**
 * Function for "purchasing" the products in the cart
 * Params:
 *  userId: the ID of the corresponding User
 *
 * Body:
 *  A JSON containing the product Id and the product quantity selected
 */
const purchase = async (req, res) => {
    if (!req.params?.userId) {
        return res.status(400).end();
    }

    try {
        var user = await User.findById(req.params.userId).populate({
            path: "cart",
            populate: {
                path: "products",
                populate: "product"
            }
        });
    } catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(404).end();
        }
        console.log(err);
        return res.status(500).end();
    }

    const products = user.cart.products;
    products.forEach( async (product) => {
        if(product.product.inStock >= product.quantity) {
            product.product.inStock -= product.quantity;
            product.product.sold += product.quantity;
            try {
                await Product.updateOne({ _id: product.product._id }, { inStock: product.product.inStock, sold: product.product.sold });
            } catch (err) {
                console.log(err);
                return res.status(500).end();
            }
        }
    });

    user.cart.products = [];
    try {
        await user.cart.save();
    } catch (err) {
        console.log(err);
        return res.status(500).end();
    }

    return res.status(200).end();
}

module.exports = {
    show,
    addItem,
    purchase
};