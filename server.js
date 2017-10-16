'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');
var flash    = require('connect-flash');
var session = require('express-session');

var app = express();


// required for passport
app.use(session({ secret: 'inventory' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



//load models
require('./models/user.model');

//load passportJS configuration
// require('./oauth/passport.js')(passport);

//load routes

const UserRouter = require('./routes/user.route');


// Init App


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // to get information from html forms



app.use('/app', express.static(__dirname + '/public'));


app.use('/api/users', UserRouter);


app.get('/app/', (req, res, next) => {
    res.sendFile('./public/index.html');
});

app.listen(6600, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 6600');
});

//for unit testing
module.exports = app;