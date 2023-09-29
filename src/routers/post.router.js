const router = require('express').Router();

const { postController } = require('../controllers');
const validateJWT = require('../middlewares/validateJWT');
const { validatePost, validateCategoryExists } = require('../middlewares/validatePost');
const { validateUserPut, validateTitleAndContent } = require('../middlewares/validateUser');

router.post('/post', validateJWT, validatePost, validateCategoryExists, postController.createPost);
router.get('/post', validateJWT, postController.getAllPosts);
router.get('/post/:id', validateJWT, postController.getPostById);

router.put(
  '/post/:id', 
  validateJWT, 
  validateUserPut,
  validateTitleAndContent,
  postController.updatePostId,
);

module.exports = router;