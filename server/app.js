var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');

var boardgame = require('./routes/boardgame-route')
var user = require('./routes/user-route')
var message = require('./routes/message-route')
var collection = require('./routes/collection-route')
var match = require('./routes/match-route')

var app = express();
const cors = require('cors')

// MongoDB stuff
require('dotenv').config();
var mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
var database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/boardgame', boardgame)
app.use('/user', user)
app.use('/message', message)
app.use('/collection', collection)
app.use('/match', match)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;