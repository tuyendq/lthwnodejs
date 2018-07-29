var express = require('express');

var app = express();

app.set('port', process.env.PORT || 1337);
// Set view engine to ejs; views is in app/views folder
app.set('view engine', 'ejs');
app.set('views', 'views');

app.locals.siteTitle = "LTHW NodeJS";

app.use(express.static('./public'));
app.use(require('./routes/index'));


var server = app.listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port'));
});



