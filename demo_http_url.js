#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Conten-Type': 'text/plain'});
	res.write('The url is: ');
	res.write(req.url);
	res.write('\n');
	res.end('The End!\n');
}).listen(8082, 'nodejs.practicehabits.net');
console.log('runnin at 8082');
