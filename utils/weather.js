var http  = require('http');
var https = require('https');

// getWeather();

exports.weather = function(){
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
      });

      res.on('end', function(){
        //explain json data
        //download weather image if we dont have
        var json = JSON.parse(body);
        var des  = json.query.results.channel.item.description;
        // console.log('parse json:'+ des);
        var img = des.split('\"')[1];
        console.log(img);
        return img;
      });
  })
}