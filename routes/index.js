"use strict"
var path=require('path');
var mongoutil = require(path.resolve("./lib/index"));
module.exports = function(app){
	app.get("/",function(req,res){
		
		/*var query=[];
		var options=req.body;
		if(options.allDatabases)
			query.push('--host');
		else if(options.databaseName){
			query.push('--db')
			query.push(options.databaseName)
		}
		if(options.collectionName)

		query.push()

				var  = ['--db', options.database, '--collection', "values", '--out', '/home/harish/dump/'];
				*/



		mongoutil.mongodump();
		res.status(200).json("started");
	})
};