const connection = require('../config/dbConnect');



class Cars {
    static showCars (req, res) {
        connection.query("SELECT * FROM car", (error, results) => { 
            res.render('pages/car', {datas: results})   
        });
    }

    static upCar (req, res) {
        let param = {
            image: req.file.filename,
            modele: req.body.modele,
            prix: req.body.prix,
            description: req.body.description   
           }
        let id = req.query.id;
           console.log('body',id);
               connection.query("UPDATE car SET ? WHERE idcar = ? ", [param,id] , (error, results) => {
                   return res.redirect('/car')
               })
    }
}


module.exports = Cars;