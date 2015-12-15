var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/userModel.js');

router.get('/', function(req, res) {
    if (req.user) {
        res.render('create', {
            user: req.user
        });
    } else {
        res.render('create', {
            user: "null"
        });
    }
});

router.get('/compose', function(req, res) {
    if (req.user) {
        res.render('compose', {
            user: req.user
        });
    } else {
        res.redirect("/login");
    }
});

router.post('/compose', function(req, res) {
    var newSongName = req.body.saveSongName;
    var newSongNotes = JSON.parse(req.body.saveSongNotes);

    var query = {username: req.user.username};
    var options = {new:true};

    User.findOne(query, function(err, user) {
        var newSongObj = {};
        newSongObj.songTitle = newSongName;
        newSongObj.songNotes = newSongNotes;

        user.songs.push(newSongObj);
        user.save(function(err) {
            if (err) {
                console.error("error: " + err);
                return next(err);
            } else {
                res.status(200).redirect("/create/compose");
            }
        });
    });
});

module.exports = router;
