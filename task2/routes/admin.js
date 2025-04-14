const path = require('path');
const express = require('express');
const router = express.Router();


const products = [];

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
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