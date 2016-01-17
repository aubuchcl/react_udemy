var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");

var app = express();

//set port
app.set("port", (process.env.PORT || 3000));

//set Static Path with app.use
app.use(express.static(path.join(__dirname, 'client')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Start server
app.listen(app.get('port'), function(){
	console.log('Server has started on port: ' + app.get('port'));
})