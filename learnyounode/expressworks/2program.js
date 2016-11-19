var express = require('express');
var port = process.argv[2];
var indexFile = process.argv[3];

var app = express();

app.use('/', express.static(indexFile));

app.listen(port);
