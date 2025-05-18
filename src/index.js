const express = require('express');
const { ServerConfig, Logger, EmailConfig } = require('./config');
const apiRouter = require('./routes');

const app = express();

app.use('/api', apiRouter);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Server started at PORT: ${ServerConfig.PORT}`);
    Logger.info('This is a test info log to check the working of logging mechanism');
    try {
        const response = await EmailConfig.sendMail({
            from: ServerConfig.GMAIL,
            to: 'youremail@gmail.com',
            subject: 'Testing Nodemailer',
            text: 'Some random text to check if this is working...'
        });

        console.log(response);
    } catch (error) {
        console.log(error);
    }
})