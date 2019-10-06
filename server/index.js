const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');

app.get('/api/product', (req,res) => {
    const list = ['tomato', 'banana', 'chocolate'];
    res.json(list);
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
