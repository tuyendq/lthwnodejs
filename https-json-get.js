'use strict'

const https = require('https')
// const url = 'https://gist.githubusercontent.com/azat-co/5407980/raw/eb53c5afefdfebcf5b33e043c87dbd072fa6869f/StorifyAPI_GET_stories'
// const url = 'https://gist.githubusercontent.com/gcollazo/884a489a50aec7b53765405f40c6fbd1/raw/49d1568c34090587ac82e80612a9c350108b62c5/sample.json'
const url = 'https://gist.githubusercontent.com/planetoftheweb/98f35786733c8cccf81e/raw/f3dad774ed1fe20b36011b1261bb392ee759b867/data.json'

https.get(url, (response) => {
    let rawData = ''
    response.on('data', (chunk) => {
        rawData += chunk
    })
    response.on('end', () => {
        try {
            const parseData = JSON.parse(rawData)
            console.log(parseData)
        } catch (e) {
            console.error(e.message)
        }
    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})
