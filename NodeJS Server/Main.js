var http = require("http");
var winston = require ("winston");

// Global Variables
var PORT = 2222;
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "events.log" })
    ]
});


// Function to handle te HTTP requests
function handleRequest(){

}


var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    logger.info("-----Server started!-----");
});
