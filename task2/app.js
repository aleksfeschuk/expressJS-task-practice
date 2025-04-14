const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const products = [
    { id: 1, name: 'iPhone 14' },
    { id: 2, name: 'Samsung Galaxy S22' },
    { id: 3, name: 'MacBook Air' },
    { id: 4, name: 'Dell XPS 13' },
    { id: 5, name: 'iPad Pro' },
  ];


app.get('/', (req, res) => {
    res.send(`
        <form action="product" method="POST">
            <input type="text" name="search" placeholder="What's you find?" />
            <button type="submit">Search</button>
        </form>    
    `);
});

app.post('/product', (req, res) => {
    const searchTerm = req.body.search.toLowerCase();

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

app.listen(PORT, () => {
    console.log(`Server working on http://localhost:${PORT}`);
});