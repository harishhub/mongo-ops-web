"use strict"
var spawn = require('child_process').spawn;

class MongoUtil {
	constructor() {

	}

	mongodump(options) {


		//mongodump --host mongodb1.example.net --port 37017 --username user --password pass --out /opt/backup/mongodump-2011-10-24
		

		//var options = ['--db', options.database, '--collection', "values", '--out', '/home/harish/dump/'];
		//console.time("testtime");

		var args = ["--host", "188.166.180.5", "--port", "27017", "--username", "", "--password", "", "--out", "/home/harish/dump"];
		var mongodump = spawn('/usr/bin/mongodump', args);
		//var mongodump = childExec('/usr/bin/mongodump', args);

		mongodump.stdout.on('data', function(data) {
			console.log('stdout: ' + data);
		});


		mongodump.stderr.on('data', function(data) {
			console.log('stderr: ' + data);
		});

		mongodump.on('exit', function(code) {
			console.log('mongodump exited with code ' + code);
		});
	}
}


module.exports = new MongoUtil();