var http = require('http')
var request = require('request')
var $ = require('jQuery')
var fs = require('fs')

// http.createServer(function(req, rsp){
// 	var url = 'http://www.dbmeinv.com/dbgroup/rank.htm?pager_offset=';

// 	var j = 1000
// 	while(j > 0){
// 		spider(url + j);
// 		j--
// 	}

// 	rsp.writeHead(200, { 'Content-Type': 'text-plain' });
// 	rsp.end('sucess');
// }).listen(3000);

var url = 'http://www.dbmeinv.com/dbgroup/rank.htm?pager_offset=';

// var j = 1000
// while(j > 0){
// 	spider(url + j);
// 	j--
// }
spider(url + '30');
console.log('start');

function spider(url){
	request(url, function(err, response, body){
		console.log(url + ' response ' + response.statusCode);
		if (response.statusCode == 200) {
			var images = $(body).find('img[class="height_min"]')
			console.log('total [' + images.length + '] images');

			if (images.length > 0) {
				var i = 0
				for(; i < images.length; i++){
					var imageURL = $(images[i]).attr('src')
					console.log(imageURL);
					var name = imageURL.substring(30);
					var path = 'E:\\spider\\' + name;

					//下载文件
					request(imageURL).pipe(fs.createWriteStream(path));
				}
			}
		}
	})
}