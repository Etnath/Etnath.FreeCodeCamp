var express = require('express');
var port = process.argv[2];
var indexFile = process.argv[3];

var app = express();

app.set('view engine', 'jade');
app.set('views', indexFile);

app.get('/home', function(req, res)
{
    res.render(indexFile, {date: new Date().toDateString()});
    res.end();
});

app.listen(port);
