const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const sha1 = require('bcryptjs');
const connection = require('../config/dbConnect');
const Cars = require ('../models/modCar');
const multer = require('multer');


// ADD CAR //
exports.addCar = (req, res) => {
    let param = {
     image: req.file.originalname,
     modele: req.body.modele,
     prix: req.body.prix,
     description: req.body.description,
    }
    console.log('body',param);
    if(param.image && param.modele && param.prix && param.description ) {
            connection.query("INSERT INTO car SET ? ",param, (error, results) => {
                return res.redirect('/car')
            })
    } else {
            return res.render('pages/admin/addCar',  { message_err : "Tous les champs n'ont pas été remplis."})
        }
}; 


// UPDATE CAR //
exports.updateCar = (req, res) => {
   Cars.upCar(req,res);
}; 