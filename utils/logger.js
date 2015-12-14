var log4js = require('log4js');

log4js.configure({
  appenders: [
    {type : 'console'},
    {
      'type' : 'dateFile',
      'filename' : '../logs/log',
      'category' : 'log_date',
      'alwaysIncludePattern': true,
      'pattern': '-yyyy-MM-dd.log'
    }
  ],
  replaceConsole : true
});

exports.logger = function (name){
	var log = log4js.getLogger(name);
	log.setLevel('INFO');
	return log;
}