const Router = require('express').Router();

const messages = require('./index')
const adminRout = require('./admin');
const registration = require('./registration')

Router.use(messages)

Router.use('/admin', adminRout); ////✅✅
Router.use(registration) //✅✅

module.exports = Router