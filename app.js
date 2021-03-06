'use strict';

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
	res.sendFile('./public/index.html');
});

app.listen(3000, '0.0.0.0', function() {
	console.log("The frontend server is running on port 3000!");
});