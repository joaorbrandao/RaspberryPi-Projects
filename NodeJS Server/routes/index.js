var express = require('express');
var router = express.Router();

router.get("/", function(request, response){
	var servicesFile = request.app.get('servicesFile');
	var _services = servicesFile.services;
	/*services1.forEach(function(item){
		console.log(item.title);
		console.log(item.description);
		console.log(item.position);
	});*/

	response.render("index", {
		pageTitle: "Home",
		siteTitle: "Node.js Server",
		services: _services
	});
});

module.exports = router;
