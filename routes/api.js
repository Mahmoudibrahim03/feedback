
var messages = require('./messages')
var adminRout = require('./admin');
var registration = require('./registration')

Router.user(messages)
Router.use('/admin', adminRout);
Router.use(registration)


