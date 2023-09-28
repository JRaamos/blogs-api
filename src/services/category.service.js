const { Category } = require('../models');

const creatCategory = async (category) => {
  const newCategory = await Category.create(category);
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  creatCategory,
  getAllCategories,
};
