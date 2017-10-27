'use strict';

const bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose');

const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

mongoose.Promise = global.Promise;

//load models
require('./models/user.model.js');


//load passportJS configuration
require('./oauth/passport.js')(passport);

//load routes
const UserRouter = require('./routes/user.route.js');
const MainRouter = require('./routes/main.route.js');


// Init App
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // to get information from html forms

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));



// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// Load View Engine
app.set('views', __dirname + '/public'); // set up ejs to be looked up in public dir
app.set('view engine', 'ejs'); // set up ejs for templating

//connect to db
mongoose.connect('mongodb://localhost:27017/pharmacy', err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});

app.use('/app', express.static(__dirname + '/public'));
app.use('/modules', express.static(__dirname + '/modules'));
app.use('/controllers', express.static(__dirname + '/controllers'));
app.use('/models', express.static(__dirname + '/models'));
app.use('/routes', express.static(__dirname + '/routes'));
app.use('/services', express.static(__dirname + '/services'));
app.use('/test', express.static(__dirname + '/test'));
app.use('/app/modules', express.static(__dirname + '/bower_components'));


app.use('/app', MainRouter);
app.use('/users', UserRouter);



app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/app/users', (req, res, next) => {
    res.sendFile(__dirname + '/public/user.html');
});

app.get('/app/invoices', (req, res, next) => {
    res.sendFile(__dirname + '/public/invoice.html');
});


app.listen(4500, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 4500');
});

//for unit testing
module.exports = app;