var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../models/userModel');

module.exports = function() {
    passport.use(new FacebookStrategy({
            clientID: '972059372885571',
            clientSecret: '4793c2ac473d14363e22102d1a194000',
            callbackURL: 'http://localhost:3000/auth/facebook/callback',
            profileFields: ['id', 'email', 'name', 'photos'],
            passReqToCallback: true
        },
        function(req, accessToken, refreshToken, profile, done) {
            var query = {
                'facebook.id': profile.id
            };

            User.findOne(query, function(error, user) {
                if (user) {
                    console.log('Facebook user found');
                    done(null, user);
                } else {
                    console.log('Facebook user NOT found');
                    var user = new User;

                    user.email = profile.emails[0].value;
                    user.image = profile.photos[0].value;
                    user.username = profile.name.givenName + ' ' + profile.name.familyName;
                    user.lessonsCompleted = 0;

                    user.facebook = {};
                    user.facebook.id = profile.id;
                    user.facebook.token = accessToken;

                    // console.log('USERNAME: ' + user.username);

                    user.save();
                    done(null, user);
                }
            })
        }));
}
