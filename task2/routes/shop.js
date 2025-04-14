const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, '..', 'views', 'shop.html'));
});


router.post('/product', (req, res) => {
    const searchTerm = req.body.search.toLowerCase();
    const products = req.products;

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );

    if(filteredProducts.length > 0) {
        const results = filteredProducts.map(p => `<li>${p.name}<li>`).join('');
        res.send(`
            <h2>Result search:</h2>
            <ul>${results}</ul>
            <a href="/"> Back</a>    
        `);
    } else {
        res.send(`
            <p>Nothing found for: <strong>${searchTerm}</strong></p>
            <a href="/"> Back</a>   
        `)
    }
});

module.exports = router;