var express = require('express'),
    mongoose = require('mongoose')
	bodyParser = require('body-parser'),
	path = require('path');

var app = express();
var port = process.env.PORT || 3000;
var db = mongoose.connect('mongodb://localhost/bookapi');
var Book = require('./models/bookModel');

app.use(express.static(path.join(__dirname, 'html')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'views/index.html'));
    // res.send("Welcome to my API.");
});
app.get('/addBooks', function(req, res) {
	res.sendFile(path.join(__dirname, 'views/addBook.html'));
});

app.listen(port, function() {
    console.log("Running my app on port " + port);
});
