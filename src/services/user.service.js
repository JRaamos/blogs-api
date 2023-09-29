const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const account = await User.create({ displayName, email, password, image });
  return account;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { message: 'User does not exist' };
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};
module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  getAllUsers,
  deleteUser,
};