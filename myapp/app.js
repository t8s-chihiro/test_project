var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 写真のサンプルデータ
var photoList = [
  {
      id: "001",
      name: "photo001.jpg",
      type: "jpg",
      dataUrl: "http://localhost:3000/data/photo001.jpg"
  },{
      id: "002",
      name: "photo002.jpg",
      type: "jpg",
      dataUrl: "http://localhost:3000/data/photo002.jpg"
  }
];

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 写真リストを取得するAPI
app.get("/api/photo/list", function(req, res, next){
  res.json(photoList);
});
// app.get("/api/photo/:photoId", function(req, res, next){
//   var photo;
//   for (i = 0; i < photoList.length; i++){
//       if (photoList[i].id == req.params.photoId){
//           var photo = photoList[i];
//       }
//   }
//   res.json(photo);
// });

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
