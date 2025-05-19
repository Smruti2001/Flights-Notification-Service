const { StatusCodes } = require('http-status-codes');

const Mailer = require('../config/emailConfig');
const AppError = require('../utils/errors/appError');
const { TicketRepository } = require('../repositories');

const ticketRepository = new TicketRepository();

async function sendEmail(mailFrom, mailTo, subject, text) {
    try {
        const response = await Mailer.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: subject,
            text: text
        });
        return response;
    } catch (error) {
        console.log(error);
        throw new AppError(['Unable to send email at the moment'], StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function createTicket(data) {
    try {
        const response = await ticketRepository.create(data);
        return response;
    } catch (error) {
        throw new AppError(['Something went wrong while creating ticket'], StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getPendingTickets() {
    try {
        const response = await ticketRepository.getPendingTickets();
        return response;
    } catch (error) {
        throw new AppError(['Something went wrong while fetching pending tickets'], StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    sendEmail,
    createTicket,
    getPendingTickets
}