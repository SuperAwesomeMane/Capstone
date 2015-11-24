var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next) {
    if (!req.user) {
        res.redirect('/login');
    }
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('profile', {
        user: req.user
    });
});

module.exports = router;