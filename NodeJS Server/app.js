var express = require("express");
var bodyParser = require("body-parser");
var servicesFile = require('./data/services.json');

// Global Variables
var app = express();

app.set('port', process.env.PORT || 80);
app.set('servicesFile', servicesFile);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + "/"));	//To be able to use Bootstrap ;)
app.use(bodyParser.json()); //For parsing application/json
app.use(bodyParser.urlencoded({ extended: true}));  //For parsing application/x-www-form-urlencoded
//Handle GET request
app.use(require('./routes/index')); // /


var server = app.listen(app.get('port'), /*HOST,*/ function(){
	console.log("Server started at port: " + app.get('port'));
});
