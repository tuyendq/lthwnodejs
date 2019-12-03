'use strict'

const http = require('http')
const url = 'http://localhost:8080/quotes'

http.get(url, (response) => {
	let rawData = ''
	let c = 0
	response.on('data', (chunk) => {
		rawData += chunk
		c++
	})
	response.on('end', () => {
		console.log(rawData, c)
		// console.log(`Response has ended with ${c} chunk(s)`)
	})
	response.on('error', (error) => {
		console.error(`Error: ${error.message}`)
	})
}).on('error', (error) => {
	console.error(`Got error: ${error.message}`)
})
