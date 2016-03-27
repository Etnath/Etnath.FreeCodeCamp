var fs = require("fs");
fs.readFile(process.argv[2], ReadFileCallback);


function ReadFileCallback(err, data)
{
    if (err != null) 
    {
        return;
    }
    console.log(data.toString().split('\n').length - 1);
}