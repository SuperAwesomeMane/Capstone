var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../models/userModel');

module.exports = function() {

    passport.use(new FacebookStrategy({
            clientID: '1477999829175725',
            clientSecret: '4b42ea56709c5b093aee21ad3d7ec4f4',
            callbackURL: "http://localhost:3000/auth/facebook/callback",
            passReqToCallback: true,
        },
        function(accessToken, refreshToken, profile, done) {

            var query = {
                'facebook.id': profile.id
            };
            User.findOne(query, function(error, user) {
                if (user) {
                    console.log('found');
                    done(null, user);
                } else {
                    console.log('not found');
                    var user = new User;
                    user.displayName = profile.displayName;
                    // user.image = profile._json.image.url;
                    user.email = profile.emails[0].value;

                    user.facebook = {};
                    user.facebook.id = profile.id;
                    user.facebook.token = accessToken;

                    user.save();
                    done(null, user);
                }
            })
        }
    ));
}
