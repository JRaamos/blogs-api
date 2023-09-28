const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const account = await User.create({ displayName, email, password, image });
  return account;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};
const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};
module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
};