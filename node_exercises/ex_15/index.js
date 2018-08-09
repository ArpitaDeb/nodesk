
    const express = require('express');
    const app = express();

    let statusMSG = {
        "status": 200,
        "message": 'The request/response was OK? I think?'
    };

    const requestTime = (req, res, next) => {
        let message = `Request: ${req.baseUrl} ${Date.now()}`;
        console.log(message);

        next();
    };

    app.use(requestTime);

    app.get('/', function(req,res) {
        res.json(statusMSG);
    });

    app.listen (3000, function() {
        console.log(`Listening on port 3000`);
    });

    


  
