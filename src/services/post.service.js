const { BlogPost } = require('../models');

const createPost = async (post) => {
  const { title, content, categoryIds, id } = post;
  const createdPost = await BlogPost.create({ title,
    content,
    userId: id, 
    published: new Date(),
    updated: new Date() });
  await createdPost.addCategories(categoryIds);
  return createdPost;
};

module.exports = {
  createPost,
};