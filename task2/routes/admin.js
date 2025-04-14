const express = require('express');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res) => {
    res.send(`
        <h2>Added new products</h2>
        <form action="/add-product" method="POST">
            <input type="text" name="title" placeholder="name products" />
            <button type="submit"> Add </button>
        </form>
    `)
});

router.post('/add-product', (req, res) => {
    const newProduct = {
        id: Date.now(),
        name: req.body.title,
    };

    products.push(newProduct);
    console.log('Added new product:', newProduct);

    res.send(`
        <p>Product <strong>${newProduct.name}</strong> successfull added!</p>
        <a href="/add-product"> Added </a>
    `);
})

module.exports = {
    router,
    products
};