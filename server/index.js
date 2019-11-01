const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const googleUtil = require('./google-util');

app.get('/api/product', (req, res) => {
    const list = ['tomato', 'banana', 'chocolate'];
    res.json(list);
});

app.get('/api/login', (req, res) => {
  res.send(googleUtil());
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
