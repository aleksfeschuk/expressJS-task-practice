const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'users.html'));
});

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});