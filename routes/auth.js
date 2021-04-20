// CONSTANTES //

const express = require('express');
const route = express.Router();
const authControler = require('../controlers/auth');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/img/');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})
    var upload = multer({ storage: storage });

// ROUTES //
route.post('/register', authControler.register);

route.post('/login', authControler.login);



// EXPORT //
module.exports = route;