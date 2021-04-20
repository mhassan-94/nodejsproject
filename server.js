// CONST //

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// DIRECTORY //

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.json());
app.use(cookieParser());

// PATH //

dotenv.config({path:'./.env'});

const pubDirect = path.join(__dirname, './public')

// ROUTES //

app.use('/', require('./routes/pages'))
app.use('/', require('./routes/auth'))
app.use('/', require('./routes/routeCar'))


// SET //

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

// PORT //

app.listen(8000);