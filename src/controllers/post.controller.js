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

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  if (post.message) return res.status(404).json(post);
  return res.status(200).json(post);
};
module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};