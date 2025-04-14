const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log('Middleware 1: Request received');
    next();
});

app.use((req, res, next) => {
    console.log('Middleware 2: Processing continues');
    next();
});

app.get('/', (req, res) => {
    console.log('Processing completed, sending a response')
    res.send('Hello, it is response after 2 middleware');
});

app.listen(PORT, () => {
    console.log('Server working on http://localhost:${PORT}');
});