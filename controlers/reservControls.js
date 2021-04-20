const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const sha1 = require('bcryptjs');
const connection = require('../config/dbConnect');
const Reserv = require ('../models/modRes');
const multer = require('multer');


// RESERVATION CAR //

exports.reservation = (req, res) => {
    Reserv.resCar(req,res);
 }; 