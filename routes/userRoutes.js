var express = require('express');

var routes = function(User) {
    var dbRouter = express.Router();

    dbRouter.route('/users')
        .get(function(req, res) {

            User.find(function(err, users) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(users);
                }
            });
        });

    dbRouter.use('/users/:userId', function(req, res, next) {
        User.findById(req.params.userId, function(err, user) {
            if (err) {
                res.status(500).send(err);
            } else if (user) {
                req.user = user;
                next();
            } else {
                res.status(404).send('no user found');
            }
        });
    });

    dbRouter.route('/users/:userId')
        .get(function(req, res) {
            res.json(req.user);
        })
        .put(function(req, res) {
            req.user.username = req.body.username;
            req.user.password = req.body.password;
            req.user.image = req.body.image;
            req.user.email = req.body.email;
            req.user.lessonsCompleted = req.body.lessonsCompleted;
            req.user.facebook = req.body.facebook;
            req.user.google = req.body.google;
            req.user.songs = req.body.songs;
            req.user.save(function(err) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.user);
                }
            });
        });
        // .patch(function(req, res) {
        //     if (req.body._id) {
        //         delete req.body._id;
        //     }
        //     for (var p in req.body) {
        //         req.user[p] = req.body[p];
        //     }

        //     req.user.save(function(err) {
        //         if (err) {
        //             res.status(500).send(err);
        //         } else {
        //             res.json(req.user);
        //         }
        //     });
        // });

    return dbRouter
};

module.exports = routes;
