var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function() {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({username: username}).exec(function(err, user) {
                if (user) {
                    return done(null, user)
                } else {
                    return done(null, false);
                }
            })
        }
    ));
}
