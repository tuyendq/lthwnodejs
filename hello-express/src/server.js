'use strict';

var express = require('express');
var app = express();
var port = 3000;

app.listen(port, function(){
	console.log('Express app listening on port: ' + port);
});

// Route /
app.get('/', function(request, response){
	response.send('Hello from express framework!\n');
});

// Route /test
app.get('/test', function(request, response){
	response.send('Hello there!\n');
});
