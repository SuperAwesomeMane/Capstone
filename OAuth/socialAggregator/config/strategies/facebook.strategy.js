var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;


module.exports = function() {

    passport.use(new FacebookStrategy({
            clientID: '798477760262639',
            clientSecret: '965856c31814637572590172fc69c1f0',
            callbackURL: "http://localhost:3000/auth/facebook/callback",
            enableProof: false,
        },
        function(accessToken, refreshToken, profile, done) {

            var user = {};
            user.displayName = profile.displayName;
            // user.image = profile._json.image.url;
            user.email = profile.emails[0].value;

            user.facebook = {};
            user.facebook.id = profile.id;
            user.facebook.token = accessToken;

            done(null, user);
            
            // User.findOrCreate({
            //     facebookId: profile.id
            // }, function(err, user) {
            //     return done(err, user);
            // });

        }
    ));
    // passport.use(new FacebookStrategy({
    //         clientID: '798477760262639',
    //         clientSecret: '965856c31814637572590172fc69c1f0',
    //         callbackURL: 'http://localhost:3000/auth/facebook/callback',
    //         passReqToCallback: true
    //     },
    //     function(req, accessToken, refreshToken, profile, done) {
    //         var user = {};
    //         user.displayName = profile.displayName;
    //         // user.image = profile._json.image.url;
    //         user.email = profile.emails[0].value;

    //         user.facebook = {};
    //         user.facebook.id = profile.id;
    //         user.facebook.token = accessToken;

    //         done(null, user);
    //     }));

}
