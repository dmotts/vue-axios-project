
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var userRoute = require('./routes/user');
var http = require('http');
var path = require('path');
var cors = require('cors');
var mongoose = require('mongoose');
var mongoDB = require('./database_config');
var serverUrl = require('../server-url');

var app = express();

// Set up mongoose connection
mongoose.connect(mongoDB, { useNewUrlParser: true });

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// Get the default connection
var db = mongoose.connection;

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Set to only accept request from Vue frontend client address
app.use(cors({credentials: true, origin: serverUrl + ':8081'}));

app.use('/', routes);
app.use('/users', userRoute);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
