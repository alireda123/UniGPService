var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/signin');
var registerRouter = require('./routes/register');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(cors({                    //this app.use was taken from https://blog.logrocket.com/the-ultimate-guide-to-enabling-cross-origin-resource-sharing-cors/
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT']
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
