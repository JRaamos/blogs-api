const { postService } = require('../services');
const { getAllCategories } = require('../services/category.service');

const validatePost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (!categoryIds || categoryIds.length === 0) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};
const validateCategoryExists = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categories = await getAllCategories();
  const categoriesIds = categories.map((category) => category.id);
  const invalidCategories = categoryIds.filter((categoryId) => !categoriesIds.includes(categoryId));
  if (invalidCategories.length > 0) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' }); 
  }
  next();
};

const validatePostExistId = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const post = await postService.getPostById(id);
  if (post.message) return res.status(404).json(post);
  next();
};

module.exports = {
  validatePost,
  validateCategoryExists,
  validatePostExistId,
};