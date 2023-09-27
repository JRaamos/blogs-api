const { loginService } = require('../services');
const { tokenJwt } = require('../util/token-jwt');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService.login(email, password);
  if (user.message) return res.status(user.status).json({ message: user.message });
 
  return res.status(200).json({ token: tokenJwt(user.dataValues.id) });
};

module.exports = {
  loginController,
};