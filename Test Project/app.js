var express = require('express'),
    mongoose = require('mongoose')
	bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;
var db = mongoose.connect('mongodb://localhost/bookapi');

var Book = require('./models/bookModel');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get('/', function(req, res) {
    res.send("Welcome to my API.");
});

app.listen(port, function() {
    console.log("Running my app on port " + port);
});
