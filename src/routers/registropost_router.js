const { Router } = require('express');
const router = Router();
const registropost = require('../controllers/registropost_controllers.js');

router.post('/login/registro', registropost);
module.exports = router;