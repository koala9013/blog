// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
var http = require('http');

module.exports = function (app){
	app.get('/test', function (req, res){
		var url = 'www.bing.com';
		http.get(url, function(rsp){
			console.log(rsp.statusCode);
			res.render('test', {content : rsp.statusCode});
		});
		// res.render('test', {title : 'TEST'});
	});

	// app.get('/', function(req, res){
	// 	res.render('index', {title: 'Express'});
	// });
};