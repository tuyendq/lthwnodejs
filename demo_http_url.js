/* Demo of http url */
var http = require('http');

http.createServer(function(req, res){
	res.writeHeader(200, {'Content-Type':'text/html'})
	res.write(req.url);
	res.end();
}).listen(8080);

