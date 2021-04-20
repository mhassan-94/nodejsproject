// CONSTANTES //
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const sha1 = require('bcryptjs');
const connection = require('../config/dbConnect');
const modele = require ('../models/authmod');
const multer = require('multer');


// INSCRIPTION //
exports.register = (req, res) => {
    modele.register(req, res);   
};

// CONNEXION //
exports.login = async (req, res) => {
    modele.connect(req, res);
};

