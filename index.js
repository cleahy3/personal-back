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
 
// var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
 
// // setup e-mail data with unicode symbols 
// var mailOptions = {
//     from: '"People Seeker👥" <cal_leahy3@hotmail.com>', // sender address 
//     to: 'callumleahy23@googlemail.com, cal_leahy2@hotmail.com', // list of receivers 
//     subject: 'People Seeker found you', // Subject line 
//     text: 'You got some attention on people seeker', // plaintext body 
//     html: '<b>You got some attention on people seeker🐴</b>' // html body 
// };
 
// // send mail with defined transport object 
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });
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