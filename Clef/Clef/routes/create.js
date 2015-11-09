var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.user) {
        res.render('create', {user: req.user});
    } else {
        res.render('create', {user: "null"});
    }
});

module.exports = router;