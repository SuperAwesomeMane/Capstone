var express = require('express');
var bookRouter = express.Router();

var routes = function(Book) {
    bookRouter.route('/')
        .post(function(req, res) {
            var book = new Book(req.body);
            book.save();
            res.status(201).send(book);
        })
        .get(function(req, res) {

            // var query = {};
            // if (req.query.genre) {
            //     query.genre = req.query.genre;
            // }

            Book.find(function(err, books) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(books);
                }
            });
        });

    // Middleware
    bookRouter.use('/:bookId', function(req, res, next) {
        Book.findById(req.params.bookId, function(err, book) {
            if (err) {
                res.status(500).send(err);
            } else if (book) {
                req.book = book;
                next();
            } else {
                res.status(404).send('No book was found.');
            }
        });
    })
    bookRouter.route('/:bookId')
        .get(function(req, res) {
            res.json(req.book);
        })
        .put(function(req, res) {
            req.book.title = req.body.title;
            req.book.author = req.body.author;
            req.book.genre = req.body.genre;
            req.book.read = req.body.read;
            req.book.save(function(err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.book);
                }

            });
        })
        .patch(function(req, res) {
            if (req.body._id) {
                delete req.body._id;
            }

            for (var att in req.body) {
                req.book[att] = req.body[att];
            }

            req.book.save(function(err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.book);
                }

            });
        })
        .delete(function(req, res) {
            req.book.remove(function(err) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.status(204).send("Book removed.");
                }
            });
        });
    return bookRouter
};

module.exports = routes;
