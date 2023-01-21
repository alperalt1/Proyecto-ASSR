const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const login = require('./src/routers/login_router.js');
const sesion = require('./src/routers/sesion_router.js');
const inicio = require('./src/routers/inicio_router.js');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');


const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;


//configuracion motor de plantillas
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));


//variables de entorno
const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    secret: process.env.SECRET,
};
app.use(auth(config));

//routes
app.use(inicio);
app.use(login);
app.use(sesion);

app.listen(PORT, function() {
  console.log('Listening on http://localhost:3000');
});
