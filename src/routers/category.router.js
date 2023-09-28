const router = require('express').Router();
const { categoryController } = require('../controllers');
const validateName = require('../middlewares/validateCategory');
const validateJWT = require('../middlewares/validateJWT');

router.post('/categories', validateJWT, validateName, categoryController.createCategory);

module.exports = router;