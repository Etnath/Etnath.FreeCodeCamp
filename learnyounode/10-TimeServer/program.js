var net = require("net");
var port = process.argv[2];

var server = net.createServer(function callback(socket) 
{
    var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    date = date.slice(0, date.length - 3) + '\n';
    socket.end(date);
});

server.listen(port);
