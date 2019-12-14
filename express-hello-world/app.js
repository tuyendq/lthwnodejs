'use strict'
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // res.send('Hello world from express! // use res.send')
    // res.end('Hello world from express! // use res.end)')
    res.send({
        message: 'Hello world from express!',
        res: 'send'
    })
})

app.listen(3000)