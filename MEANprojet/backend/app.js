const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('first middleware');
    next();
});


app.use((req,res,next) => {
    res.send('hello frome express');
});


module.exports = app;