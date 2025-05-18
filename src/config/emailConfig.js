const nodemailer = require('nodemailer');

const { GMAIL, GMAIL_PASS } = require('./serverConfig');

const mailSender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: GMAIL,
        pass: GMAIL_PASS
    }
});

module.exports = mailSender;