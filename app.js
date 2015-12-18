// SET DEBUG=Clef:* & npm start
// npm install -g bower
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var learn = require('./routes/learn');
var create = require('./routes/create');
var profile = require('./routes/profile');
var auth = require('./routes/auth');

var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/userModel');

var app = express();
var db = mongoose.connect('mongodb://localhost/clef');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: 'anything'}));

require('./config/passport')(app);

app.use('/', routes);
app.use('/learn', learn);
app.use('/create', create);
app.use('/profile', profile);
app.use('/auth', auth);

dbRouter = require('./routes/userRoutes')(User);

app.use('/api', dbRouter);

app.get('/api', function(req, res) {
  res.send('Welcome to API');
})

// Local User Authentication
// =====================================================

app.get('/logout', function(req, res){
  req.session.destroy(function(){
    res.redirect('/');
  });
});

app.get('/login', function(req, res) {
  res.render('login');
});
app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/learn',
      failureRedirect: '/login'
    })
);

app.get('/register', function(req, res) {
  res.render('register');
});
app.post('/register', function(req, res) {
  var newUser = new User;
  newUser.username = req.body.username;
  newUser.image = "images/default.png";
  newUser.password = req.body.password;
  newUser.email = req.body.email;
  newUser.lessonsCompleted = 0;
  newUser.songs = [];

  newUser.save();

  res.redirect("/login");
});

passport.use(new LocalStrategy(function(username, password, done) {
    process.nextTick(function() {
        User.findOne({
            'username': username,
        }, function(err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false);
            }

            if (user.password != password) {
                return done(null, false);
            }

            return done(null, user);
        });
    });
}));

// =====================================================

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
