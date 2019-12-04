'use strict'

const http = require('http')
const qs = require('querystring')

// const params = {
//     quote: 'Whatever you do, do it well.', 
//     author: 'Walt Disney'
// }

const params = {
    quote: 'If you tell the truth you don\'t have to remember anything.', 
    author: 'Mark Twain'
}

const postData = qs.stringify(params)

// const postData = JSON.stringify({ 
//     quote: 'Whatever you do, do it well.', 
//     author: 'Walt Disney'
// })

const options = {
    hostname: 'quotesapi-quotes.apps.us-west-1.starter.openshift-online.com',
    port: 80,
    // hostname: 'localhost',
    // port: 8080,
    path: '/quotes',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
}

const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', (chunk) => {
        // console.log(`BODY: ${chunk}`)
        process.stdout.write(chunk)
    })
    res.on('end', () => {
        console.log('\nNo more data in response.')
    })
})

req.on('error', (e) => {
    console.error(`Request error code: ${e.code}`)
    console.error(`Request error message: ${e.message}`)
})

req.write(postData)
req.end()
