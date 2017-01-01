"use strict"
var path=require('path');
var mongoutil = require(path.resolve("./lib/index"));

module.exports = function(app){

	app.get("/",function(req,res){
		
		mongoutil.mongodump();
		res.status(200).json("started");
	});

	app.get("/mongorestore",function(req,res){
		var restoreRes = mongoutil.mongorestore();
		res.status(200).json(restoreRes);
	});
};