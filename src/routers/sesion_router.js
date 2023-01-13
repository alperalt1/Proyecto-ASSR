const { Router } = require('express');
const router = Router();
const sesion = require('../controllers/sesion_controllers.js');
const { auth, requiresAuth } = require('express-openid-connect');


router.get('/IniciarSesion', requiresAuth() ,sesion);
module.exports = router;