const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const newCategory = await categoryService.creatCategory(req.body);
  res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};