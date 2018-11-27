const Router = require('express').Router();
const dashboard = require('./dashboard')
const indexRouter = require('./index');
const reply = require('./reply');
const like = require('./like')

Router.use(indexRouter);
Router.use(dashboard);
Router.use(reply);
Router.use(like);

module.exports = Router