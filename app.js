const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const login = require('./src/routers/login_router.js');
const sesion = require('./src/routers/sesion_router.js');
//const inicio = require('./src/routers/inicio_router.js');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 3000;


app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname+'/views'));

app.use(express.static(path.join(__dirname+'/public')));

app.get('/', (req, res) => {

  

  let files = fs.readdirSync(path.join(__dirname+'/public/Img'));

  res.render('layout.ejs', {
    pageTitle: 'Home',
    images: files,
    
  })
})


//app.use(inicio);

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




