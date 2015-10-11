var express = require('express'),
	path = require('path');

var app = express();
var port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
	// res.send("Welcome to Express! :D");
});

app.listen(port, function() {
	console.log("Listen on port " + port);
});