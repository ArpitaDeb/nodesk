const express = require('express');
const app = express();
const path = require('path');

app.listen(3000,function() {
    console.log(`Listening on port 3000`);
})

app.all('/',function(request,response) {
    response.sendFile(path.join(__dirname, 'digiwiz.webflow.zip'));
})