const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const newCategory = await categoryService.creatCategory(req.body);
  res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoryService.getAllCategories();
  res.status(200).json(categories);
};
module.exports = {
  createCategory,
  getAllCategories,
};