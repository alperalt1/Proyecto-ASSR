const { Router } = require('express');
const router = Router();
const inicio = require('../controllers/inicio_controllers.js');


router.get('/', inicio);
module.exports = router;

  