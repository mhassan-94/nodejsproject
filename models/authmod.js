const jwt = require('jsonwebtoken');
const sha1 = require('bcryptjs');
const connection = require('../config/dbConnect');

// UTILISATEURS //
class modele {

    static connect (req,res) {
        try {
        const {mail, password} = req.body;

        if( !mail || !password){
            console.log('-------------------------------', req.body);
            return res.status(400).render('pages/admin/login', {
                message_err : "Vous n'avez pas remplis tous les champs."
            })
        }
        
        connection.query('SELECT * FROM utilisateur WHERE mail = ?', [mail], async (error, results) => {
            console.log(results);
            var comp = await sha1.compare(password, results[0].password)
            if(!results || !comp) {
                res.status(401).render('pages/admin/login', {
                    message_err : "L'adresse e-mail ou le mot de passe est incorrect"
                })
            } else {
                const id = results[0].id;
                const token = jwt.sign({id: id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("The token is: " + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
            res.cookie('jwt', token, cookieOptions);
            res.status(200).redirect("/");
            }
        });
        } 
        catch (error) {
        console.log(error)
        }
    }

    static register (req, res) {
        const {prenom, nom, mail, password1, password2} = req.body;
        connection.query('SELECT mail FROM utilisateur WHERE mail = ?', [mail], async (error, results) => {
            if(error){
                console.log(error)
            }
            if(results.length > 0){
                return res.render('pages/admin/user', {message : 'Cet email est déjà utilisé'})
            }   else if(password1 !== password2){
                    return res.render('pages/admin/user', {message : 'Les mots de passe ne correspondent pas'});
                };

    let hashedPW = await sha1.hash(password1, 8);
    console.log('crypted password:' + hashedPW);

    connection.query('INSERT INTO utilisateur SET ?', {nom: nom, prenom: prenom, mail: mail, password : hashedPW}, (error, results) => {
        if(error){
            console.log(error);
        } else{
            return res.render('pages/admin/user', {
                message : 'User registered'
            });
        }
    }
        )})
    }
}

module.exports = modele;