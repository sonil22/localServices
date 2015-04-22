var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http=require('http');



var routes = require('./routes/index');
var users = require('./routes/users');

var mainPage = require('./routes/mainPage');
var consumer = require('./routes/consumerCrudOps');
var provider = require('./routes/providerCrudOps');
var myEvents = require('./routes/myEvents');
var comments = require('./routes/comments');
var allHappenings = require('./routes/allHappenings');
var searchEvents = require('./routes/searchEvents');
var allInterests=require('./routes/allInterestsAllLocations');


//var feedback = require('./routes/feedbackCrudOps');
//var update = require('./routes/crudOps');
//var del = require('./routes/crudOps');


	
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);


app.use('/consumers', consumer);
app.use('/providers', provider);
app.use('/providers/comments', comments);
app.use('/myEvents',myEvents);
app.get('/',mainPage);
app.use('/viewAllHappenings',allHappenings);
app.use('/consumers/searchEvents',searchEvents);
app.use('/allInterestsAllLocations',allInterests);


module.exports = app;	
