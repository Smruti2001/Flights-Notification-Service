const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/appError");

function validateCreateRequest(req, res, next) {
    if(!req.body.recepientEmail) {
        ErrorResponse.error = new AppError(['recepientEmail not found in the incoming request in the required format']);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.subject) {
        ErrorResponse.error = new AppError(['Subject not found in the incoming request in the required format']);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if(!req.body.content) {
        ErrorResponse.error = new AppError(['Content not found in the incoming request in the required format']);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateCreateRequest
}