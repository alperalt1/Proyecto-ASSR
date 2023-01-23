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
          showConfirmButton: true,
          timer: false,
          ruta: 'login'    
        });
							
			} else {         
				//creamos una var de session y le asignamos true si INICIO SESSION       
				req.session.loggedin = true;                
				req.session.name = results[0].name;
				res.render('login', {
					alert: true,
					alertTitle: "Conexión exitosa",
					alertMessage: "¡LOGIN CORRECTO!",
					alertIcon:'success',
					showConfirmButton: false,
					timer: 1500,
					ruta: 'sesion'
				});        			
			}			
			res.end();
		});
	}else{	
		res.send('Please enter user and Password!');
		res.end();
	}
}