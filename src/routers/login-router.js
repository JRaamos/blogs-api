const router = require('express').Router();
const { loginController } = require('../controllers');
const { validateLogin } = require('../middlewares/validateLogin');

router.post('/login', validateLogin, loginController.loginController);

module.exports = router;