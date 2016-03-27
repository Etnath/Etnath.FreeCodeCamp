var httpModule = require("http");
var httpGetRequest = process.argv[2];
var completeResponseData = "";

httpModule.get(httpGetRequest,displayResponse);

function displayResponse(response)
{
    response.setEncoding("utf-8");
    response.on("data",collectData);
    response.on("error",displayError);
    response.on("end",displayData);
}

function displayData()
{
    console.log(completeResponseData.length);
    console.log(completeResponseData);
}

function displayError(err) 
{
    console.log(err);
}

function collectData(data)
{
    completeResponseData += data;
}