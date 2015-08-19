var express = require('express');
var app = express();
var sass = require('node-sass-middleware');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var swig = require('swig');
var routes = require("./routes");


// hey app, render views using the html engine
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');


// Request Logging
app.use(morgan("dev"));


// SASS
app.use(
  sass({
    src: __dirname + '/assets', //where the sass files are
    dest: __dirname + '/public', //where css should go
    debug: true
  })
);
app.use(express.static(path.join(__dirname, 'public')));

app.use("/bower_components", express.static(path.join(__dirname, 'bower_components')));

app.use(routes);


// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(JSON.stringify(err));
    res.render('error', err);
});

app.listen(3000);
