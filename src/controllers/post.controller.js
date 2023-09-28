const { postService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const createdPost = await postService.createPost({ title, content, categoryIds, id });
  return res.status(201).json(createdPost);
};
const getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();
  return res.status(200).json(posts);
};
module.exports = {
  createPost,
  getAllPosts,
};