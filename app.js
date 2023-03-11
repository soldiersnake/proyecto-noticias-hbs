var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

//rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let noticiasRouter = require('./routes/noticias')
let loginRouter = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//configuracion de session
app.use(session({
  secret: 'noticias_',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 60*60*1000},  //la duracion de la session de la cookie

}));

//vistas de rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/noticias', noticiasRouter);
app.use('/login', loginRouter);

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
