var http = require('http');
var https = require('https');

http.createServer(function (request, response) {
	//search weather from yahoo.api
	var url = 'https://query.yahooapis.com/v1/public/yql?'
	+'q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nanjing%22)'
	+'&format=json'
	+'&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
	https.get(url, function (res) {
		console.log("statusCode: ", res.statusCode);
  		// console.log("headers: ", res.headers);
  		var body = '';
  		res.on('data', function(d) {
  			body += d;
  			console.log('data');
  		});

  		res.on('end', function(){
  			//explain json data
  			//download weather image if we dont have
  			console.log('end');
  			var json = JSON.parse(body);
  			var des = json.query.results.channel.item.description;
  			console.log('parse json:'+des);
			response.writeHead(200, { 'Content-Type': 'text-plain' });
			response.end(''+des);
  		});
	});
}).listen(8124);

console.log('server start');