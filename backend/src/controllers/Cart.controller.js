const Cart = require('../models/Cart/Cart');
const CartItem = require('../models/Cart/CartItem');
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
const addItem = async (req, res) => {
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

    console.log("Produto: ", product);
    console.log("Puxando o usuario do DB");

    const user = await User.findById(userId).populate('cart');
    if(!user.cart) {
        console.log('Criando novo carrinho');
        user.cart = new Cart({});
    }

    const quantity = req.body?.quantity;
    const cartItem = new CartItem({});
    cartItem.product = product._id;

    user.cart.products.push({
        product: product._id,
        quantity: quantity
    });
    user.cart.save();
    return res.status(201).json(user.cart);
}

module.exports = {
    show,
    addItem
};