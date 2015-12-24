var http    = require('http')
var request = require('request')
var $       = require('jQuery')
var fs      = require('fs')
var _       = require('underscore')

var url     = 'http://www.dbmeinv.com/dbgroup/rank.htm?pager_offset=';
var j       = 1000;

// setInterval(function(){
// 	spider(url + j);
// 	j--;
// }, 3000);
spider(url + '200');
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