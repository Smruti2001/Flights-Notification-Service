const express = require('express');
const { PingCheckController } = require('../../controllers');
const emailRouter = require('./emailRoutes');

const v1Router = express.Router();

v1Router.use('/email', emailRouter);
v1Router.get('/ping', PingCheckController.pingCheck);

module.exports = v1Router;