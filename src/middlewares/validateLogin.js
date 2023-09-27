const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const regexEmail = /[A-Za-z]+@[A-Za-z]+\.com/;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  validateLogin,
};