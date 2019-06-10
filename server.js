var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./app/config/database');
var cors = require('cors');

// Express, Api------------------------------------------------------------
var api = require('./app/routes/api');
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

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('./client/dist'));
}

// Send all requests to index.html
app.get('*', function(req, res) {
  response.sendFile(path.join(__dirname, './dist', 'index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;