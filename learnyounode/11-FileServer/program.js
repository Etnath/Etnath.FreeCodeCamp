var fs = require("fs");
var http = require("http");
var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function callback(req, res) 
{
    var stream = fs.createReadStream(filePath);
     stream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    stream.pipe(res);
    });
});

server.listen(port);