"use strict"

var app = require("express")();
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require(path.resolve("./routes/index.js"))(app);
var http = require("http");


var server = http.createServer(app);
server.listen(3000);



server.on('error', (error) => {
	console.log(error);
});


server.on('listening', () => {
	var port = server.address().port;
	console.log("listening on", port);
});


module.exports = app;