var express = require('express');
var fs = require('fs');
var port = process.argv[2];
var fileName = process.argv[3];

var app = express();

app.get('/books', function(req, res)
{
    fs.readFile(fileName, function(e, data)
    {
        var object = JSON.parse(data);
        res.json(object);
    });
});

app.listen(port);
