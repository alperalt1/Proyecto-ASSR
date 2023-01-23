const mysql = require('mysql2')
const bcryptjs = require('bcryptjs');
const connection = require('../../db/database');

module.exports= async (req, res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const usuario = req.body.usuario;
    const correo = req.body.correo;
    const pass = req.body.pass;
    let passwordHash = await bcryptjs.hash(pass, 8);  
    var sql = `INSERT INTO user 
    (first_name, last_name, user_name, email, pass) 
    VALUES ("${nombre}", "${apellido}", "${usuario}", "${correo}", "${passwordHash}")`;
    connection.query(sql,function (err, result) {
        if (err) {
        throw err;
        }
        else{
        console.log("1 record inserted");
        res.render('registro', {
                    alert: true,
                    alertTitle: "Registration",
                    alertMessage: "¡Successful Registration!",
                    alertIcon:'success',
                    showConfirmButton: false,
                    timer: 6500,
                    ruta: ''
                });
        }  
    });
}