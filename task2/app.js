const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use((req, res, next) => {
    req.products = adminData.products;
    next();
});


app.use(shopRoutes)
app.use(adminData.router);

app.listen(PORT, () => {
    console.log(`Server working on http://localhost:${PORT}`);
});