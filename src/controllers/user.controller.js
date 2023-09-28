const { userService } = require('../services');
const { tokenJwt } = require('../util/token-jwt');

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  return res.status(201).json({ token: tokenJwt(newUser.id) });
};

module.exports = {
  createUser,
};