var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user) {
        res.render('learn', {user: req.user});
    } else {
        res.render('learn', {user: "null"});
    }
});

// Lesson routes //========================================

router.get('/lesson1', function(req, res) {
	if(!req.user) {
		res.redirect('/login');
	} else {	
		res.render('lessons/lesson1', {user: req.user});
	}
});
router.get('/lesson2', function(req, res) {
	if(!req.user) {
		res.redirect('/login');
	} else {	
		res.render('lessons/lesson2', {user: req.user});
	}
});
router.get('/lesson3', function(req, res) {
	if(!req.user) {
		res.redirect('/login');
	} else {	
		res.render('lessons/lesson3', {user: req.user});
	}
});
router.get('/lesson4', function(req, res) {
	if(!req.user) {
		res.redirect('/login');
	} else {	
		res.render('lessons/lesson4', {user: req.user});
	}
});
router.get('/lesson5', function(req, res) {
	if(!req.user) {
		res.redirect('/login');
	} else {	
		res.render('lessons/lesson5', {user: req.user});
	}
});
router.get('/lesson6', function(req, res) {
	if(!req.user) {
		res.redirect('/login');
	} else {	
		res.render('lessons/lesson6', {user: req.user});
	}
});
router.get('/lesson7', function(req, res) {
	if(!req.user) {
		res.redirect('/login');
	} else {	
		res.render('lessons/lesson7', {user: req.user});
	}
});

module.exports = router;