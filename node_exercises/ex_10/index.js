
    const express = require('express');
    const oneLinerJoke = require('one-liner-joke');
    const app = express();


    app.listen(3000,function() {
        console.log('Listening on port 3000');
    });

    app.get("/", function(request, response) {
        response.send('Welcome!');
    })

    app.get("/jokes",function(request,response) {
        let randomJoke = oneLinerJoke.getRandomJoke();
        let randomJoke2 = oneLinerJoke.getRandomJoke();
        response.send(`${randomJoke.body}\n${randomJoke2.body}`);
    })

    app.get("/joke", function(request,response) {
        let randomJoke = oneLinerJoke.getRandomJoke();
        response.send(randomJoke.body);
    })

    app.post("/joke",function(request,response) {
        response.send('My jokes are too funny, I\'m not getting new ones for you.');
    })

    app.put("/joke",function(request,response) {
        response.send('No, no, no...not changing my act dude!');
    })

    app.delete("/joke",function(request, response) {
        response.send('Good jokes never get too old');
    })

    app.all("/joke",function(request,response) {
        response.send('I know, I\'m so good you\'re looking for jokes everywhere');
    })