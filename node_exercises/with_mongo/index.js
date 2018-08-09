const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const express = require('express');
const app = express();

app.listen(3000,() => {
    console.log('Listening on port 3000');
});

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    MongoClient.connect(url, (err, client) => {
        const db = client.db('comics');
        const collection = db.collection('superheroes');

        collection.find({}).toArray((error, documents) => {
            client.close();
            res.render('index', { documents: documents });
        });
    });

});

