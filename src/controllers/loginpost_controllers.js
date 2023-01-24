const mysql = require('mysql2')
const bcryptjs = require('bcryptjs');
const connection = require('../../db/database');


module.exports= async (req, res)=> {
	const correo = req.body.correo;
	const pass = req.body.pass;   
	let passwordHash = await bcryptjs.hash(pass, 8);
		if (correo && pass) {
			connection.query('SELECT * FROM user WHERE email = ?', [correo], async (error, results, fields)=> {
				if( results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass)) ) {    
					res.render('login', {
						alert: true,
						alertTitle: "Error",
						alertMessage: "USUARIO y/o PASSWORD incorrectas",
						alertIcon:'error',
						showConfirmButton: false,
						timer: 1500,
						ruta: 'login'    
					});		
				} else {         
					//creamos una var de session y le asignamos true si INICIO SESSION       
					req.session.loggedin = true;                
					req.session.user_name = results[0].user_name;
					req.session.first_name = results[0].first_name;
					req.session.last_name = results[0].last_name;
					req.session.email = results[0].email;
					res.render('login', {
						alert: true,
						alertTitle: "Conexión exitosa",
						alertMessage: "¡LOGIN CORRECTO!",
						alertIcon:'success',
						showConfirmButton: false,
						timer: 1100,
						ruta: 'sesion'
					});        			
				}			
				res.end();
			});
		}else{	
			res.render('login', {
				alert: true,
				alertTitle: "Error",
				alertMessage: "Ingresar USUARIO y/o PASSWORD",
				alertIcon:'error',
				showConfirmButton: false,
				timer: 1500,
				ruta: 'login'
			});   
			res.end();
		}
}