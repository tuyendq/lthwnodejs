'use strict';

const express = require('express');
const app = express();

function logger(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
}

app.use(logger);

app.get('/', function index(req, res){
    console.log(`Welcome to middleware!`);
    res.end(`Welcome to middleware!`);
});

app.listen(3000, 'localhost', function () {
    console.log(`Listenning to req `)
});