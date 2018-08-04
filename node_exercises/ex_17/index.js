const express = require('express');
const app = express();

app.set('view engine', 'pug')

app.get('/', (req,res) => {
    res.render('index',{ title: 'Hey', header: 'HEADER 1', message: 'This is stuff passed from the index.js \'res.render\' call.'})
})

app.get('/index2', (req,res) => {
    res.render('index2')
})
app.listen(3000);