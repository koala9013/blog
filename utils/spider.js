var http = require('http')
var request = require('request')
var $ = require('jQuery')
var fs = require('fs')
var _ = require('underscore')

var url = 'http://www.dbmeinv.com/dbgroup/rank.htm?pager_offset=';

var j = 16;
console.log(j);
// while(j > 0){
// 	// process.nextTick(function(){
// 	// 	spider(url + j);
// 	// });
// 	console.log(j);
// 	j--
// }
spider(url + j);
function spider(url){
	request(url, function(err, response, body){
		console.log(url + ' response ' + response.statusCode);
		if (response.statusCode == 200) {
			var images = $(body).find('img[class="height_min"]')
			console.log('total [' + images.length + '] images');

			if (images.length > 0) {
				var i = 0
				//underscore each方法
				_.each(images, function(element, index){
					var imageURL = $(element).attr('src')
					console.log(imageURL);
					var name = imageURL.substring(30);
					var path = 'E:\\spider\\' + name;

					//下载文件
					request(imageURL).pipe(fs.createWriteStream(path));
				})
			}
		}
	})
}