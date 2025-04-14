const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="product" method="POST">
            <input type="text" name="search" placeholder="What's you find?" />
            <button type="submit">Search</button>
        </form>    
    `);
});

app.post('/product', (req, res) => {
    const searchTerm = req.body.search;
    res.send(`You find: ${searchTerm}`);
});

app.listen(PORT, () => {
    console.log(`Server working on http://localhost:${PORT}`);
});