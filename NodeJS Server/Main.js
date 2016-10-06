var express = require("express");
var winston = require ("winston");
var bodyParser = require("body-parser");


// Global Variables
var app = express();
var HOST = "localhost";
var PORT = 2222;
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "events.log" })
    ]
});


app.use(bodyParser.json()); //For parsing application/json
app.use(bodyParser.urlencoded({ extended: true}));  //For parsing application/x-www-form-urlencoded


// Function to handle the HTTP requests
//Handle GET request
app.get("/", function(request, response){
    //Get client IP Address
    var clientIpAddress = request.ip;
    response.sendFile(__dirname + "/index.html");
    //Log
    logger.info("Client - " + clientIpAddress);
});
//Handle POST request
app.post("/", function(request, response){
    //Get client IP Address
    var clientIpAddress = request.ip;
    response.sendFile(__dirname + "/index.html");
    //Log
    logger.info("Client - " + clientIpAddress);
});

//If you want to run in the machine's IP address remove the HOST above ;)
app.listen(PORT, HOST, function(){
    logger.info("Server started at: " + HOST + ":" + PORT);
});
