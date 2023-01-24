const { Router } = require('express');
const router = Router();
const perfil = require('../controllers/perfil_controllers.js');

router.get('/perfil', perfil);
module.exports = router;