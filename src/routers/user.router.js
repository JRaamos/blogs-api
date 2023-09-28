const router = require('express').Router();
const { userController } = require('../controllers');
const { validateDisplayName, validateEmail,
  validatePassword, validateEmailExists } = require('../middlewares/validateUser');

router.post(
  '/user', 
  validateDisplayName,
  validateEmail, 
  validatePassword, 
  validateEmailExists, 
  userController.createUser,
);

module.exports = router;