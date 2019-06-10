var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database');
var cors = require('cors');

// Express, Api------------------------------------------------------------
var api = require('./routes/api');
var app = express();

app.use(cors())

// Connection to MongoDB---------------------------------------------------
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird'), useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));
mongoose.set('useFindAndModify', false);

// Initialize pasport------------------------------------------------------
app.use(passport.initialize());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Origin, Authorization, Content-Type, Content-Disposition, Content-Length, X-Auth-Token');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  res.setHeader('Content-Type', 'application/json');

  // // Pass to next layer of middleware


  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });

  next();
});

module.exports = app;