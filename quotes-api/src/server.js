'use strict';

var express = require('express');
var app = express();
var port = 3000;

var quotes = [
{id: 1,quote: "The best is yet to come", author: "Unknown", year: 2000},
{id: 2,quote: "Everything is practice.", author: "Pele", year: 1950},
{id: 1,quote: "You're what you practice most.", author: "Unknown", year: 1910}
];

app.listen(port, function(){
	console.log('Express listening on port: ' + port);
});

// Route /
app.get('/', function(request, response){
	response.send('Get request received at "/"');
});

// Route /quotes
app.get('/quotes', function(req, res){
	if (req.query.year){
		res.send('Return a list of quotes from yaar: ' + req.query.year);
	} else {
	console.log('Get list of all quotes as json');
	res.json(quotes);
	}
});

// Route /quotes:id
app.get('/quotes/:id', function(req, res){
	console.log('Return quote with id: ' + req.params.id);
	res.send('Return quote with id: ' + req.params.id);
});
