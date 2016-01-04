var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/userModel.js');
var loadedSongName = "";
var loadedSongNotes = ""; 

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
        var query = {
            username: req.user.username
        };
        console.log("loadedSong: " + loadedSongName);
        console.log("SONG NOTES: " + loadedSongNotes);
        User.findOne(query, function(err, user) {
            if (user) {
                res.render('compose', {
                    user: user,
                    songToLoadName: loadedSongName,
                    songToLoadNotes: loadedSongNotes
                });
            } else {
                return next(err);
            }
        });
    } else {
        res.redirect("/login");
    }
});

router.post('/compose', function(req, res, next) {
    if (req.body.saveSongName) {
        console.log("SAVING SONG");

        var newSongName = req.body.saveSongName;
        var newSongNotes = JSON.parse(req.body.saveSongNotes);

        var query = {
            username: req.user.username
        };
        User.findOne(query, function(err, user) {
            var newSongObj = {};
            newSongObj.songTitle = newSongName;
            newSongObj.songNotes = newSongNotes;

            user.songs.push(newSongObj);
            user.save(function(err) {
                if (err) {
                    console.error("error: " + err);
                    return next(err);
                }
            });
        });
    } else if (req.body.loadSongName) {
        console.log("LOADING SONG");

        loadedSongName = req.body.loadSongName;

        var query = {
            username: req.user.username
        };
        User.findOne(query, function(err, user) {
           user.songs.forEach(function(songIndex) {
                if (songIndex.songTitle == loadedSongName) {
                    console.log("song title found for user");
                    // console.log(songIndex.songTitle);
                    // console.log(songIndex.songNotes);
                    loadedSongNotes = JSON.stringify(songIndex.songNotes);
                }
            });
        });
        res.redirect("http://localhost:3000/create/compose");
    }
});

module.exports = router;
