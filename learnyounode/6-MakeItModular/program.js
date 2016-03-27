var readDirModule = require("./readDir.js");

var path = process.argv[2];
var extension = process.argv[3];

readDirModule(path,extension,callback);

function callback(err, data)
{
    if (err) 
    {
        console.log(err.toString());    
    }
    
    for (var i = 0; i < data.length; i++) 
    {
       console.log(data[i]);
    }
}