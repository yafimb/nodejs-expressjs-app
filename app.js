const http      = require('http');
const express   = require('express');
const app       = express();

app.use('/',(req, res, next)=>{
    console.log('This is allways run')
    next();
});

app.use('/add-product',(req, res, next)=>{
    res.send('<html><h1>add product</h1></html>');
});

app.use('/',(req, res, next)=>{
    res.send('<html><h1>Hello from express.</h1></html>');
});

app.listen(3000);
