const Router = require('express').Router();

var login = require('./routes/login.1');
var signup = require('./routes/signup.1');
var logout = require('./routes/signout');
Router.use('/signup', signup);
Router.use('/logout', logout);
Router.use('/login', login);

module.exports = Router