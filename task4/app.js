app.use((req, res, next) => {
    throw new Error("OH NO!");
});


app.use ((err, req, res, next) => {
    console.error(err);
    
    res.status(err.statusCode || 500).send(err.message);
});

