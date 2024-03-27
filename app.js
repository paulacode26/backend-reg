/// entry point for our application
const express = require('express');
const routes = require('./routes/routing');
const path = require('path');

// body-parser module is responsible for parsing the incoming request body in a middleware.
const bodyParser = require('body-parser');

// app is an instance of express. 
app = express();

// middleware for exposing data on req.body
app.use(bodyParser.urlencoded({extended: true}));

// to use static files like css, pics, other assets 
app.use(express.static(path.join(__dirname, '../frontend')));

// using routes middleware
app.use('/', require('./routes/routing'));

//starting our application @ Port 7000
app.listen(7000, (req, res) => 
{
    console.log('server is running........');
});