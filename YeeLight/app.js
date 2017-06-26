const http = require('http');
var express = require('express');
var app = express();


const hostname = '127.0.0.1';
const port = 3000;


app.get('/', function(request, response){
	response.send('Hello World');
});

app.listen(port, hostname, function(){
	console.log(`Server running at http://${hostname}:${port}/`);
});
