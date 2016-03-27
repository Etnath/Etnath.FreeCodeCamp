var fs = require("fs");
var pathModule = require("path");

var path = process.argv[2];
var extension = process.argv[3];

fs.readdir(path, DisplayFileList);

function DisplayFileList(err, data)
{
    if (err != null) 
    {
        return;    
    }
    
    for (var i = 0; i < data.length; i++) 
    {
        if (pathModule.extname(data[i].toString()).slice(1) == extension) 
        {
            console.log(data[i]);    
        }
    }
}