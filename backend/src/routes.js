const express = require('express');
const routes = express.Router();


const static_base = "http://localhost:3333/api/static/";

const products = [
    {
        id: 1,
        img: `${static_base}cookie.jpg`,
        name: "Cookies - Loja X",
        description: "Dois cookies de gotas de chocolate, muito crocantes feitos em esetilo americano. Feito com farinha de trigo integral, sem glúten.",
        price: 7.50,
        inStock: 10,
    },
    {
        id: 2,
        img: `${static_base}sushi.jpg`,
        name: "Sushi - Loja Y",
        description: "4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia.",
        price: 15.90,
        inStock: 20,
    },
    {
        id: 3,
        img: `${static_base}caldo.png`,
        name: "Caldo - Loja Z",
        description: "Deliciosa e saborosa sopa de abóbora , feita com abobora em creme batida linguiça calabresa defumada e carne de sol desfiada.",
        price: 9,
        inStock: 30,
    }
]


routes.get('/', (req, res) => { return res.status(200).end(); });
routes.get('/products/all', (req, res) => { return res.status(200).json(products); });
routes.get('/products/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).end();
    }
    if (req.params.id < 0 || req.params.id >= products.length) {
        return res.status(404).end();
    }

    return res.status(200).json({ product : products[req.params.id] });
});

module.exports = routes;