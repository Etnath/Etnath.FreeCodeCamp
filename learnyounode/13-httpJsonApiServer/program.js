var http = require("http");
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function callback(req, res)
{
    res.writeHead(200, { 'Content-Type': 'application/json' })

    var reqUrl = url.parse(req.url,true);
    if(reqUrl.pathname == '/api/parsetime')
    {
        var timeObject = getHoursMinutesSecondsFromUrl(reqUrl);
        res.write(JSON.stringify(timeObject));
    }
    else if (reqUrl.pathname == '/api/unixtime')
    {
        var timeObject = getUnixEpochTimeFromUrl(reqUrl);
        res.write(JSON.stringify(timeObject));
    }

    res.end();
});

function getHoursMinutesSecondsFromUrl(isoTime)
{
    var time = isoTime.query.iso.split('T')[1];
        var hour = time.split(':')[0];
        var minute = time.split(':')[1];
        var second = time.split(':')[2].split('.')[0];

    return  {
                "hour": parseInt(hour),
                "minute": parseInt(minute),
                "second": parseInt(second)
            };
}

function getUnixEpochTimeFromUrl(isoTime)
{
    var myDate = new Date(isoTime.query.iso);
    var result = myDate.getTime();
    return {
                "unixtime": result,
           };
}

server.listen(port);
