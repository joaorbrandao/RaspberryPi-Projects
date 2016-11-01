var express = require('express');
var router = express.Router();

router.get("/author", function(request, response){
	var dataFile = request.app.get('dataFile');
    console.log(__dirname);
});

module.exports = router;
