const { BlogPost, User, Category } = require('../models');

const createPost = async (post) => {
  const { title, content, categoryIds, id } = post;
  const createdPost = await BlogPost.create({
    title,
    content,
    userId: id,
    published: new Date(),
    updated: new Date(),
  });
  await createdPost.addCategories(categoryIds);
  return createdPost;
};
const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    exclude: ['password'],
  });
  return posts; 
};
module.exports = {
  createPost,
  getAllPosts,
};