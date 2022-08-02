const express = require('express');
// Donia's comment
const app = express();

app.use((req, res, next) => {
   console.log('firs');
    next();
});

app.use((req, res, next) => {
     res.send('hello from exw');
 });

module.exports = app;