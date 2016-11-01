var express = require("express");
var bodyParser = require("body-parser");
var dataFile = require('./data/author.json');

// Global Variables
var app = express();

app.set('port', process.env.PORT || 80);
app.set('dataFile', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + "/"));	//To be able to use Bootstrap ;)
app.use(bodyParser.json()); //For parsing application/json
app.use(bodyParser.urlencoded({ extended: true}));  //For parsing application/x-www-form-urlencoded
//Handle GET request
app.use(require('./routes/index')); // /
app.use(require('./routes/author')); // /author


var server = app.listen(app.get('port'), /*HOST,*/ function(){
	console.log("Server started at port: " + app.get('port'));
});
