const Router = require('express').Router();
const indexRouter = require('./index');


Router.use(indexRouter); // main message (GET , POST)

module.exports = Router