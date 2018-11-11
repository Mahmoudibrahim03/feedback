const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var bodyParser = require('body-parser')
var session = require('express-session')
var conf = require('./config/conf')
var port = preocess.env.PORT || 3000
//routing setting ...

var indexRouter = require('./routes/index');
var adminRout = require('./routes/admin');
var login = require('./routes/login');
var signup = require('./routes/signup');
var logout = require('./routes/signout');
var reply = require('./routes/reply');
var dashboard = require('./routes/dashboard')
//database setting ...

var databaseConnection = require('./models/setting');
databaseConnection.connect()

//medileware setting .....

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret:conf.secret,
    resave: false,
    saveUninitialized: true
}))

app.use('/admin', adminRout);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/login', login);
app.use(indexRouter);
app.use(dashboard);
app.use(reply);

app.listen(port, () => {
    console.log("server is running")
})
module.exports = app;