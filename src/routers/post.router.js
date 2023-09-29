const router = require('express').Router();

const { postController } = require('../controllers');
const validateJWT = require('../middlewares/validateJWT');
const { validatePost,
  validateCategoryExists,
  validatePostExistId } = require('../middlewares/validatePost');
const { validateUserAuthorization,
  validateTitleAndContent } = require('../middlewares/validateUser');

router.post(
  '/post',
  validateJWT,
  validatePost,
  validateCategoryExists,
  postController.createPost,
);

router.get(
  '/post',
  validateJWT,
  postController.getAllPosts,
);
router.get(
  '/post/:id',
  validateJWT,
  postController.getPostById,
);

router.put(
  '/post/:id',
  validateJWT,
  validateUserAuthorization,
  validateTitleAndContent,
  postController.updatePostId,
);

router.delete(
  '/post/:id',
  validateJWT,
  validatePostExistId,
  validateUserAuthorization,
  postController.deletePostId,
);

module.exports = router;