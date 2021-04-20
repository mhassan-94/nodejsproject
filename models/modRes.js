const connection = require('../config/dbConnect');



class Reserv {

    static resCar (req, res) {
        let id = req.query.id;
        console.log('---------------------', id)
        connection.query("SELECT * FROM car WHERE idcar = ?",id, (error,results) => {
            console.log('ICIIIIIIIIIIIIIIIIII4', results)
            res.render('pages/reservation', {data1: results})          
        })
    }
    
}


module.exports = Reserv;