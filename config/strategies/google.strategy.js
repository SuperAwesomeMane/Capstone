var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../../models/userModel');

module.exports = function() {
    passport.use(new GoogleStrategy({
            clientID: '576292348477-4qenhgecp054nqa6s5t75t7js8aiho72.apps.googleusercontent.com',
            clientSecret: '9OaLSpa-S1luTtWNu_i5ZpJM',
            callbackURL: 'http://clef.herokuapp.com/auth/google/callback'
        },
        function(req, accessToken, refreshToken, profile, done) {
            var query = {
                'google.id': profile.id
            };
            User.findOne(query, function(error, user) {
                if (user) {
                    console.log("Google user found");
                    console.log('username: ' + user.username);
                    console.log('image: ' + user.image);
                    done(null, user);
                } else {
                    console.log("Google user NOT found")
                    var user = new User;
                    user.email = profile.emails[0].value;
                    user.image = profile._json.image.url;
                    user.username = profile.displayName;
                    user.lessonsCompleted = 0;
                    user.songs = [];

                    console.log('username: ' + user.username);
                    console.log('image: ' + user.image);

                    user.google = {};
                    user.google.id = profile.id;
                    user.google.token = accessToken;

                    user.save();
                    done(null, user);
                }
            });
        }
    ));
};
