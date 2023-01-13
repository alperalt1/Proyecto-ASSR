const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const login = require('./routers/login_router.js');
const sesion = require('./routers/sesion_router.js');
const app = express();
require('dotenv').config()


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

// The /profile route will show the user profile as JSON
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

app.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});



// app.listen(app.get('port'), ()=> {
//     connection.connect(function(err){
//         if (err) throw err;
//         console.log('Database connected');
//     })
// });




