var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pj_mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  // Create a mongo schema
  var pirateSchema = mongoose.Schema({
	name: String, 
	birth: Date,
	weight: Number,
  });

  pirateSchema.methods.speak = function () {
	  var greeting = this.name
	    ? "Ahoi, I'm " + this.name
	    : "";
	    console.log(greeting);
  }
  
  // Create the collection
  var Pirate = mongoose.model('Pirate', pirateSchema);

  var rackham = new Pirate({ name: 'Rackham' });

  // rackham.save(function (err, rackham) {
  //   if (err) return console.error(err);
  //   rackham.speak();
  // });

  Pirate.find({ name: /^Ra/i }, {_id: false, name: true}, (err, pirates) => {
    if (err) return console.error(err);
    console.log(pirates);
  })

});



module.exports = app;
