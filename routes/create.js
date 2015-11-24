var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	if (req.user) {
        res.render('create', {user: req.user});
    } else {
        res.render('create', {user: "null"});
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

module.exports = router;