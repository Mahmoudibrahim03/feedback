const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var bodyParser = require('body-parser')

//routing setting ...

var indexRouter = require('./routes/index');
var adminRout = require('./routes/admin');

//database setting ...

var databaseConnection = require('./models/setting'); 
databaseConnection.connect()

//medileware setting .....

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(indexRouter);
app.use('/admin', adminRout);
app.listen(3000,()=>{
    console.log("server is running")
})
module.exports = app;
