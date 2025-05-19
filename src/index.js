const express = require('express');
const { ServerConfig, Queue } = require('./config');
const apiRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Server started at PORT: ${ServerConfig.PORT}`);
    await Queue.connectQueue();
    console.log('Queue connected');
})