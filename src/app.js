const express = require('express');

const app = express();
app.use(express.json());

const {user, product} = require('./function.js');

app.get('/user', (req, res) => {
    console.log(user);
    res.send(user);
});


app.get('/product', (req, res) => {
    console.log(product);
    res.send(product);
});


app.listen(5000, () => {
    console.log('API port 5000 listening...');
});
