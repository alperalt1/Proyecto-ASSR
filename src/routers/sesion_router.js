const { Router } = require('express');
const router = Router();
const sesion = require('../controllers/sesion_controllers.js');
const { auth, requiresAuth } = require('express-openid-connect');
const fs = require('fs');

router.get('/store', requiresAuth() ,sesion);
module.exports = router;