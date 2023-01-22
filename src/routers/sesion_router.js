const { Router } = require('express');
const router = Router();
const sesion = require('../controllers/sesion_controllers.js');

router.get('/sesion', sesion);
module.exports = router;

