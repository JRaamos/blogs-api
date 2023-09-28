const router = require('express').Router();

const { postController } = require('../controllers');
const validateJWT = require('../middlewares/validateJWT');
const { validatePost, validateCategoryExists } = require('../middlewares/validatePost');

router.post('/post', validateJWT, validatePost, validateCategoryExists, postController.createPost);
router.get('/post', validateJWT, postController.getAllPosts);
module.exports = router;