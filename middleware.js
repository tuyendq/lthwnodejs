var express = require('express')

var bodyParser = require('body-parser')
var morgan = require('morgan')

var app = express()
// middlewares

app.use(bodyParser.json())
app.use(morgan('dev'))

// custom middleware 1
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`)
    next()
})

// custom middleware 2
app.use((req, res, next) => { 
    if (req.query.api_key) {
        next()
    } else {
        res.status(401).send({msg: 'Not authorized!'})
    }
})


app.get('/', (req, res) => {
    res.send('Home')
})

// custom inline middleware
app.get('/accounts', (req, res, next) => {
    console.log('account inline middleware')
    next(new Error('Uh oh'))
}, (req, res) => {
    res.send({msg: 'Accounts'})
})

app.get('/transactions', (req, res) => {
    res.send('Transaction')
})

app.post('/accounts', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.use((error, req, res, next) => {
    res.status(500).send(error)
})

app.listen(process.env.PORT || 3000)