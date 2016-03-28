var httpModule = require("http");
var firstRequest = process.argv[2];
var secondRequest = process.argv[3];
var thirdRequest = process.argv[4];

var completeResponseData1 = "";
var completeResponseData2 = "";
var completeResponseData3 = "";

var firstRequestFinished = false;
var secondRequestFinished = false;
var thirdRequestFinished = false;

httpModule.get(firstRequest,handleFirstRequest);
httpModule.get(secondRequest,handleSecondRequest);
httpModule.get(thirdRequest,handleThirdRequest);

function handleFirstRequest(response)
{
    response.setEncoding("utf-8");
    response.on("data",collectData1);
    response.on("end",onEndResponse1);
}

function handleSecondRequest(response)
{
    response.setEncoding("utf-8");
    response.on("data",collectData2);
    response.on("end",onEndResponse2);
}

function handleThirdRequest(response)
{
    response.setEncoding("utf-8");
    response.on("data",collectData3);
    response.on("end",onEndResponse3);
}

function collectData1(data)
{
    completeResponseData1 += data;
}

function collectData2(data)
{
    completeResponseData2 += data;
}

function collectData3(data)
{
    completeResponseData3 += data;
}


function onEndResponse1()
{
    firstRequestFinished = true;
    if (checkAllResponseReceived()) 
    {
        logData();
    }
}

function onEndResponse2()
{
    secondRequestFinished = true;
    if (checkAllResponseReceived()) 
    {
        logData();
    }
}

function onEndResponse3()
{
    thirdRequestFinished = true;
    if (checkAllResponseReceived()) 
    {
        logData();
    }
}

function checkAllResponseReceived()
{
    return firstRequestFinished && secondRequestFinished && thirdRequestFinished;
}

function logData()
{
    console.log(completeResponseData1);
    console.log(completeResponseData2);
    console.log(completeResponseData3);
}
