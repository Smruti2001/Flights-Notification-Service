const { StatusCodes } = require('http-status-codes');
const amqplib = require('amqplib');

const AppError = require('../utils/errors/appError');
const { GMAIL } = require('./serverConfig');
const { EmailService } = require('../services');


async function connectQueue() {
    try {
        const queue = 'NotificationQueue';
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        channel.assertQueue(queue);

        channel.consume(queue, async (data) => {
            const emailObject = JSON.parse(`${Buffer.from(data.content)}`);
            await EmailService.sendEmail(GMAIL, emailObject.recepientEmail, emailObject.subject, emailObject.text);
            channel.ack(data);
        })
    } catch (error) {
        console.log('Error while connecting Queue', error);
        throw new AppError(['Something went wrong while connecting to queue'], StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    connectQueue,
}