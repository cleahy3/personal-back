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
 
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
app.set('view engine', 'ejs');
//uses the layouts modules
app.use(layouts);
// uses the express module
app.use(routes);
// parse application/x-www-form-urlencoded 

//routes go between requirements and listen
app.listen(3000 , function(){
  console.log('app is listening on port 3000');
});