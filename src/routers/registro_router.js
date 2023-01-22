const { Router } = require('express');
const router = Router();
const registro = require('../controllers/registro_controllers.js');

router.get('/login/registro', registro);
module.exports = router;