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
const updatePostId = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await postService.updatePostId(id, title, content);
  return res.status(200).json(post);
};
const deletePostId = async (req, res) => {
  const { id } = req.params;
  await postService.deletePostId(id);
  return res.status(204).end();
};
module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostId,
  deletePostId,
};