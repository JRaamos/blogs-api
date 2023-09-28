const { userService } = require('../services');

const validateDisplayName = (req, res, next) => { 
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};
const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /[A-Za-z0-9]+@[A-Za-z]+\.com/;

  if (!email || !regexEmail.test(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

const validateEmailExists = async (req, res, next) => {
  const { email } = req.body;
  const user = await userService.getUserByEmail(email);

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateEmailExists,
};