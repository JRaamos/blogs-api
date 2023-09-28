const router = require('express').Router();
const { userController } = require('../controllers');
const validateJWT = require('../middlewares/validateJWT');
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
router.get('/user', validateJWT, userController.getAllUsers);
module.exports = router;