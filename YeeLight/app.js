const http = require('http');
var express = require('express');
var app = express();
var ssdp = require('node-ssdp').Client
			, client = new ssdp({
				unicastHost: '192.168.1.2',
				unicastBindPort: 1982
			});


const hostname = '127.0.0.1';
const port = 3000;
DEBUG = 'node-ssdp*';


app.get('/', function(request, response){
	console.log('Creating request...');

	client.on('response', function inResponse(headers, code, rinfo) {
		console.log('Got a response to an m-search:\n%d\n%s\n%s', code, JSON.stringify(headers, null, '  '), JSON.stringify(rinfo, null, '  '))
	});

	client.on('notify', function () {
		console.log('Got a notification.');
	});

	//Search for the bulb
	client.search('urn:schemas-upnp-org:service:ContentDirectory:1');

	client.send();
});

app.listen(port, hostname, function(){
	console.log(`Server running at http://${hostname}:${port}/`);
});
