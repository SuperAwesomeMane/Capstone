var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user) {
        res.render('learn', {user: req.user});
    } else {
        res.render('learn', {user: "null"});
    }
});

module.exports = router;