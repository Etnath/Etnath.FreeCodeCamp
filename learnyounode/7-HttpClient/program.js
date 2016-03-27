var httpModule = require("http");
var httpGetRequest = process.argv[2];

httpModule.get(httpGetRequest,displayResponse);

function displayResponse(response)
{
    response.setEncoding("utf-8");
    response.on("data",displayData);
    response.on("error",displayError);
}

function displayData(data)
{
    console.log(data);
}

function displayError(err) 
{
    console.log(err);
}