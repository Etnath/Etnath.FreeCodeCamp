var express = require('express');
var port = process.argv[2];
var publicPath = process.argv[3];

var app = express();

app.use(require('stylus').middleware(publicPath));
app.use('/', express.static(publicPath));

app.listen(port);
