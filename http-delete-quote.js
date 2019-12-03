'use strict'

// Count arguments
console.log(`Number of arguments: ${process.argv.length}`)

const http = require('http')
const postData = JSON.stringify({ quote: 'Whatever you do, do it well.', author: 'Walt Disney' })

const options = {
    // hostname: 'quotesapi-quotes.apps.us-west-1.starter.openshift-online.com',
    // port: 80,
    hostname: 'localhost',
    port: 8080,
    path: '/quotes/3',
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`)
    })
    res.on('end', () => {
        console.log('No more data in response.')
    })
})

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`)
})

req.write(postData)
req.end()
