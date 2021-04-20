const express = require('express');
const route = express.Router();
const carControler = require('../controlers/exCars');
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


route.post('/updateCar',upload.single('image'), carControler.updateCar);

route.post('/addCar',upload.single('image'), carControler.addCar)


module.exports = route