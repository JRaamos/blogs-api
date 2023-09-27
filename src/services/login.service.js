const { User } = require('../models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return {
      status: 400,
      message: 'Invalid fields',
    };
  }
  /* if (user.email !== email || user.password !== password) {
    return {
      status: 400,
      message: 'Invalid fields',
    };
  }
  */
  return user;
};

module.exports = {
  login,
};