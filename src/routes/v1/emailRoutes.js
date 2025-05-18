const express = require('express');
const { EmailController } = require('../../controllers');
const { EmailMiddleware } = require('../../middlewares');

const emailRouter = express.Router();

emailRouter.post('/', EmailMiddleware.validateCreateRequest, EmailController.createTicket);

module.exports = emailRouter;