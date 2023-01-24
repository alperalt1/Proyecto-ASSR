//dependencias
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
const mysql = require('mysql2')
const bcryptjs = require('bcryptjs');

//exportar routers
//routers views
const inicio = require('./src/routers/inicio_router.js');
const login = require('./src/routers/login_router.js');
const registro = require('./src/routers/registro_router.js');
const sesion = require('./src/routers/sesion_router.js');
const logout = require('./src/routers/logout_router.js');
const perfil = require('./src/routers/perfil_router.js');
const connection = require('./db/database');

//routers registro de usuario
const registropost = require('./src/routers/registropost_router.js');
const loginpost = require('./src/routers/loginpost_router.js');

const app = express();
//puerto
const PORT = process.env.PORT || 3000;


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

//rutas
//get
app.use(inicio);
app.use(login);
app.use(registro);
app.use(sesion);
app.use(logout);
app.use(perfil);
//post
app.use(registropost);
app.use(loginpost);


//función para limpiar la caché luego del logout
app.use(function(req, res, next) {
    if (!req.user_name)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});



app.listen(PORT, function() {
  console.log('Listening on http://localhost:3000');
});
