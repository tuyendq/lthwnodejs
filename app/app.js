var express = require('express');

var app = express();

app.set('port', process.env.PORT || 1337);

app.locals.siteTitle = "LTHW NodeJS";

app.use(express.static('app/public'));
app.use(require('./routes/index'));


var server = app.listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port'));
});



