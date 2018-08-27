const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// IMPORT ROUTES HERE
const homeRoute = require('./routes/home.routes');


const PORT = process.env.PORT || 3000;

// ROUTES
app.use(homeRoute);


app.listen( PORT, () => console.log(`localhost ${PORT}`));