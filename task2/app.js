const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));


const shopRoutes = require('./routes/shop');

app.use(shopRoutes)

app.listen(PORT, () => {
    console.log(`Server working on http://localhost:${PORT}`);
});