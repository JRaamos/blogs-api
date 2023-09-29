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

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    exclude: ['password'],
  });
  if (!post) return { message: 'Post does not exist' };
  return post;
};

const updatePostId = async (id, title, content) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  const post = await getPostById(id);
  return post;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostId,
};