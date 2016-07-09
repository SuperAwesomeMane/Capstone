var express = require('express');
var router = express.Router();
var User = require('./models/userModel');

var defUser = new User;
  defUser.username = req.body.username;
  defUser.image = "images/default.png";
  defUser.password = req.body.password;
  defUser.email = req.body.email;
  defUser.lessonsCompleted = 0;
  defUser.songs = [];

router.get('/', function(req, res, next) {
	if (req.user) {
        res.render('learn', {user: defUser});
    } else {
        res.render('learn', {user: defUser});
        // res.render('learn', {user: "null"});
    }
});

// Lesson routes //========================================

router.get('/lesson1', function(req, res) {
	// if(!req.user) {
	// 	res.redirect('/login');
	// } else {	
		res.render('lessons/lesson1', {user: defUser});
	// }
});
router.get('/lesson2', function(req, res) {
	// if(!req.user) {
	// 	res.redirect('/login');
	// } else {	
		res.render('lessons/lesson2', {user: defUser});
	// }
});
router.get('/lesson3', function(req, res) {
	// if(!req.user) {
	// 	res.redirect('/login');
	// } else {	
		res.render('lessons/lesson3', {user: defUser});
	// }
});
router.get('/lesson4', function(req, res) {
	// if(!req.user) {
	// 	res.redirect('/login');
	// } else {	
		res.render('lessons/lesson4', {user: defUser});
	// }
});
router.get('/lesson5', function(req, res) {
	// if(!req.user) {
	// 	res.redirect('/login');
	// } else {	
		res.render('lessons/lesson5', {user: defUser});
	// }
});
router.get('/lesson6', function(req, res) {
	// if(!req.user) {
	// 	res.redirect('/login');
	// } else {	
		res.render('lessons/lesson6', {user: defUser});
	// }
});
router.get('/lesson6b', function(req, res) {
		res.render('lessons/lesson6b', {user: defUser});
});
router.get('/lesson7', function(req, res) {
	// if(!req.user) {
	// 	res.redirect('/login');
	// } else {	
		res.render('lessons/lesson7', {user: defUser});
	// }
});

module.exports = router;