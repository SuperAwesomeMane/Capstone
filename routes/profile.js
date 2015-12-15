var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require("../models/userModel.js");

router.use('/', function(req, res, next) {
    if (!req.user) {
        res.redirect('/login');
    }
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	var query = {username: req.user.username};
	User.findOne(query, function(err, user) {
		if(user) {
		    res.render('profile', {
		        user: user
		    });
		} else {
			return next(err);
		}
	});
});

module.exports = router;