const { userService } = require('../services');
const { tokenJwt } = require('../util/token-jwt');

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  return res.status(201).json({ token: tokenJwt(newUser.id) });
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};
const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (user.message) return res.status(404).json(user);
  return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.user;
  await userService.deleteUser(id);
  return res.status(204).end();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};