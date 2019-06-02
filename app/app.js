var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const bodyParser = require('body-parser');

// Express-----------------------------------------------------------------------------------
var app = express();

// dbConfig-----------------------------------------------------------------------------------
var mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');
mongoose.connect(dbConfig.url, { promiseLibrary: require('bluebird'), useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

// Cors---------------------------------------------------------------------------------------
app.use(cors());

// View engine setup--------------------------------------------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuring Passport-----------------------------------------------------------------------
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({ secret: 'DisLex' }));
app.use(passport.initialize());
app.use(passport.session());

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
var flash = require('connect-flash');
app.use(flash());

// Initialize Passport------------------------------------------------------------------------
var initPassport = require('./passport/init');
initPassport(passport);

// Routes-------------------------------------------------------------------------------------
var routes = require('./routes/index')(passport);
app.use('/', routes);

// require('./routes/films')(app);
// require('./routes/books')(app);

// only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
