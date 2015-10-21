var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function() {

    passport.use(new GoogleStrategy({
            clientID: '576292348477-4qenhgecp054nqa6s5t75t7js8aiho72.apps.googleusercontent.com',
            clientSecret: '9OaLSpa-S1luTtWNu_i5ZpJM',
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        function(req, accessToken, refreshToken, profile, done) {
        	var user = {};

        	user.email = profile.emails[0].value;
        	user.image = profile._json.image.url;
        	user.displayName = profile.displayName;

        	user.google = {};
        	user.google.id = profile.id;
        	user.google.token = accessToken;

            done(null, user);
        }
    ));
};
