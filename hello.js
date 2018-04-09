#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello nodejs on Ubuntu!\n');
}).listen(8081, 'nodejs.practicehabits.net');
console.log('Server running at http://nodejs.practicehabits.net:8081/');
