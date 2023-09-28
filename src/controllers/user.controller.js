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

module.exports = {
  createUser,
  getAllUsers,
};