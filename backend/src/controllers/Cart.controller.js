const Cart = require('../models/Cart');
const User = require('../models/User');
const Product = require('../models/Product');

/**
 * Function for retriving the purchase cart, given a userId passed by query params
 */
const show = async (req, res) => {
    const userId = req.params["userId"];
    if(!userId) {
        return res.status(400).end();
    }
    
    const user = await User.findById(userId).populate('cart');
    if(!user) {
        return res.status(400).end();
    }

    const cart = await user.cart;
    return res.status(200).json(cart);
}

/**
 * Function for adding an item to cart
 * Params: 
 *  userId: the ID of the corresponding User
 */
const store = async (req, res) => {
    const userId = req.params["userId"];
    if (!userId) {
        return res.status(400).end();
    }

    const productId = req.body?.product?.id;
    try {
        var product = await Product.findById(productId);
    } catch(err) {
        console.log(err);
        return res.status(500).end();
    }

    console.log("Puxando o usuario do DB");

    const user = await User.findById(userId).populate('cart');
    if(!user.cart) {
        user.cart = new Cart({});
    }

    const quantity = req.body?.quantity;
    user.cart.products.push({
        product: product._id,
        quantity: quantity
    });
    user.cart.save();
    return res.status(201).json(user.cart);
}

module.exports = {
    show,
    store
};