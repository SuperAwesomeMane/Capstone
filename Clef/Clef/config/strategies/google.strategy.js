var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../../models/userModel');

module.exports = function() {

    passport.use(new GoogleStrategy({
            clientID: '576292348477-4qenhgecp054nqa6s5t75t7js8aiho72.apps.googleusercontent.com',
            clientSecret: '9OaLSpa-S1luTtWNu_i5ZpJM',
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        function(req, accessToken, refreshToken, profile, done) {
            var query = {
                'google.id': profile.id
            };
            User.findOne(query, function(error, user) {
                if (user) {
                    console.log("Google user found");
                    done(null, user);
                } else {
                    console.log("Google user NOT found")
                    var user = new User;
                    user.email = profile.emails[0].value;
                    user.image = profile._json.image.url;
                    user.displayName = profile.displayName;

                    user.google = {};
                    user.google.id = profile.id;
                    user.google.token = accessToken;

                    // console.log('username: ' + user.displayName);
                    // console.log('image: ' + user.image);

                    user.save();
                    done(null, user);
                }
            });
        }
    ));
};
