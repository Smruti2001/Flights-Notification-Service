const { StatusCodes } = require("http-status-codes");
const { EmailService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createTicket(req, res) {
    try {
        const response = await EmailService.createTicket({
            recepientEmail: req.body.recepientEmail,
            subject: req.body.subject,
            content: req.body.content
        });

        SuccessResponse.message = 'Created a ticket successfully';
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createTicket
}