const Router = require('express').Router();

var login = require('./login.1');
var signup = require('./signup');
var logout = require('./signout');

Router.use('/signup', signup);
Router.use('/logout', logout);
Router.use('/login', login);

module.exports = Router