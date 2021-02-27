var express = require('express');
var todoController = require('./controllers/todoController');
var session = require('express-session');
var app = express();
var cookieParser=require('cookie-parser');

// set up template engine

app.set('view engine', 'ejs');
                              
//static files

app.use(express.static('./public')); // Not giving /assets means that if request for any static files is made it looks for it in ./public

app.use(cookieParser());              

app.use(session({secret: 'jfsklfksljfslkl1', saveUninitialized: true, resave: false}));

//fire controllers

todoController(app);

//listen to port
app.listen(3000);

console.log('You are listening to port 3000');
