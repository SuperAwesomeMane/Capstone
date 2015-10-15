var passport = require('passport');
var googleStrategy = require('passport-google-oauth').OAuth2Strategy;


module.exports = function() {
    passport.use(new googleStrategy({
            clientID: '292535443134-iqo231ns013pk94hua22vl88ptqd8lrl.apps.googleusercontent.com',
            clientSecret: 'LS4WCq0IQPTY_adOBUSIKBQF',
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
