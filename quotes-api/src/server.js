'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');
var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var quotes = [
{id: 1,quote: "The best is yet to come", author: "Unknown", year: 2000},
{id: 2,quote: "Everything is practice.", author: "Pele", year: 1950},
{id: 3,quote: "You're what you practice most.", author: "Unknown", year: 1910}
];

var db = new sqlite3.Database('db/quotes.db');

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
        // res.send('Return a list of quotes from year: ' + req.query.year);
        // db.all('SELECT * FROM quotes WHERE year = 1902', function(err, rows){
        db.all('SELECT * FROM quotes WHERE year = ?', [req.query.year], function(err, rows){    
            if(err){
                
                res.send(err.message);
            } else {
                console.log('Return a list of quotes from year:' + req.query.year);
                res.json(rows);
            }
        });
    } else {
        console.log('Get list of all quotes as json');
        db.all('SELECT * FROM quotes', function processRows(err, rows){
            if(err){
                res.send(err.message);
            } else {
                for (let i = 0; i < rows.length; i++) {
                    console.log(rows[i].quote);
                }
                res.json(rows);
            }
        });
        // res.json(quotes);
    }
});

// Route /quotes:id
app.get('/quotes/:id', function(req, res){
    console.log('Return quote with id: ' + req.params.id);
    // res.send('Return quote with id: ' + req.params.id);
    db.get('SELECT * FROM quotes WHERE rowid = ?', [req.params.id], function(err, row){
        if(err){
            res.send(err.message);
        }else{
            res.json(row);
        }
    });
});

// Route POST /quotes
app.post('/quotes', function(req, res){
    console.log('Insert a new quote: ' + req.body.quote);
    // res.json(req.body);
    db.run('INSERT INTO quotes VALUES (?, ?, ?)', [req.body.quote, req.body.author, req.body.year], function(err){
        if(err){
            console.log(err.message);
        }else{
            res.send('Inserted quote with id: ' + this.lastID);
        }      
    });
});
