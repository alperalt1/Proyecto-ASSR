const { Router } = require('express');
const router = Router();
const loginpost = require('../controllers/loginpost_controllers.js');

router.post('/auth', loginpost);
module.exports = router;