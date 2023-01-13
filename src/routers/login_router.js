const { Router } = require('express');
const router = Router();
const login = require('../controllers/login_controllers.js');


router.get('/', login);
module.exports = router;