// CONSTANTES //
const express = require('express');
const route = express.Router();
const connection = require('../config/dbConnect')
const Cars = require ('../models/modCar');
const Reserv = require ('../models/modRes');

// ROUTES //
route.get("/", (req, res) => {
    res.render('pages/admin/admin')
})

route.get("/register", (req, res) => {
    res.render('pages/admin/user')
})

route.get("/login", (req, res) => {
    res.render('pages/admin/login')
})

route.get('/post', (req, res) => {
    res.render('pages/admin/post')
})

route.get('/addCar', (req, res) => {
    res.render('pages/admin/addCar')
})

route.get('/updateCar', (req, res) => {
    const idcar = req.query.id
    connection.query("SELECT * FROM car WHERE idCar = ?", idcar, (error, results) => {
        console.log('MON RESULTAT -----------', results)
    res.render('pages/admin/updateCar',{upcar: results})
    });
})

route.get('/deleteCar', (req, res) => {
    const idcar = req.query.id
    connection.query("DELETE FROM car WHERE idcar = ? ", idcar, (error, results) => {
    res.redirect('/car')
    });
})

route.get('/car', (req, res) => {
    Cars.showCars(req, res);  
})

route.get('/reservation', (req, res) => {
    Reserv.resCar(req,res);
})

// EXPORTS //
module.exports = route;