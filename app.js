const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

//bycrypt.js
const bcryptjs = require('bcryptjs');

//const { auth, requiresAuth } = require('express-openid-connect');
//const sesion = require('./src/routers/sesion_router.js');


const inicio = require('./src/routers/inicio_router.js');
const login = require('./src/routers/login_router.js');
const registro = require('./src/routers/registro_router.js');
const sesion = require('./src/routers/sesion_router.js');

const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config()
const mysql = require('mysql2')
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//configuracion motor de plantillas
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));



const session = require('express-session');
const { getMaxListeners } = require('process');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

//config planetscale mysql

const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')


// var sql = "INSERT INTO user (first_name, last_name, user_name, email, pass) VALUES ('alsx', 'pdsalta', 'alp', 'alt@gmail.com', 'zzz')";
// connection.query(sql);
//routes

//get
app.use(inicio);
app.use(login);
app.use(registro);
app.use(sesion);

app.post('/login/registro', async (req, res)=>{
	const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const usuario = req.body.usuario;
  const correo = req.body.correo;
  const pass = req.body.pass;
	let passwordHash = await bcryptjs.hash(pass, 8);  
  var sql = `INSERT INTO user 
  (first_name, last_name, user_name, email, pass) 
  VALUES ("${nombre}", "${apellido}", "${usuario}", "${correo}", "${pass}")`;
  connection.query(sql,function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.redirect('/');
  });
})


app.listen(PORT, function() {
  console.log('Listening on http://localhost:3000');
});
