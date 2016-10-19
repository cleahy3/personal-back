var express = require('express');
var ejs = require('ejs');
var layouts= require('express-ejs-layouts');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
// requiring the routes files
var routes = require('./config/routes');
//constructing express
var app = express();
//sets the view engine for use with res.render
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json())
 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.set('port', (process.env.PORT || 3000));

app.set('view engine', 'ejs');
//uses the layouts modules
app.use(layouts);
// uses the express module
app.use(routes);
// parse application/x-www-form-urlencoded 

//routes go between requirements and listen
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
