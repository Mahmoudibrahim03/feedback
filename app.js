const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet')
var bodyParser = require('body-parser')
var session = require('express-session')
var conf = require('./config/conf')
var port = process.env.PORT || conf.port
//routing setting ...

var api = require('./routes/api')

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
    secret: conf.secret,
    resave: false,
    saveUninitialized: true
}))
app.use(helmet())

app.use('/api', api);


app.listen(port, () => {
    console.log("server is running")
})
module.exports = app;