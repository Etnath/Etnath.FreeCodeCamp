var fs = require("fs");
var pathModule = require("path");
var extensionArg;
var callbackFunc;

module.exports = function (path, extension, callback)
{
    extensionArg = extension;
    callbackFunc = callback;
    fs.readdir(path, ReturnFileList);
};

function ReturnFileList(err, data)
{
    if (err) 
    {
        return callbackFunc(err);
    }
    
    var fileArray = [];
    for (var i = 0; i < data.length; i++) 
    {
        if (pathModule.extname(data[i].toString()).slice(1) == extensionArg) 
        {
            fileArray.push(data[i]);    
        }
    }

    callbackFunc(null, fileArray);
}
