const express = require('express');
const Logger = require('logplease');
const logger = Logger.create('');
const app = express();
let port = 7000;

app.get('/', function(request, response) {
    response.send(`You\'re using Node.js and Express!`);
});

app.listen(port, (ERROR) => {
    // if (ERROR) {
        // logger.error(`Unable to start the server on port ${port}`);
    // } ERROR HANDLING NOT EXPLAINED FOR EXPRESS
    logger.info(`This http server is running on ${port}`);
})

