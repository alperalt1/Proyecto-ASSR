const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const login = require('./routers/login_router.js');
const sesion = require('./routers/sesion_router.js');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    secret: process.env.SECRET,
};
  
app.use(auth(config));
app.use(login);
app.use(sesion);

app.listen(PORT, function() {
  console.log('Listening on http://localhost:3000');
});



// app.listen(app.get('port'), ()=> {
//     connection.connect(function(err){
//         if (err) throw err;
//         console.log('Database connected');
//     })
// });




