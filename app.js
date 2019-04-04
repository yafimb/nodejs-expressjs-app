const http      = require('http');
const express   = require('express');
const app       = express();

app.use((req, res, next)=>{
    console.log('MID1');
    next();//allow to continue to the next middleware
});

app.use((req, res, next)=>{
    console.log('MID2');
    res.send('<html><h1>Hello from express.</h1></html>');
});

const server    = http.createServer(app);

server.listen(3000);