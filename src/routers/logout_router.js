const { Router } = require('express');
const router = Router();
const logout = require('../controllers/logout_controllers.js');


router.get('/logout', logout);
module.exports = router;