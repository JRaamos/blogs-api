const { decodeJwt } = require('../util/token-jwt');

const validateJWT = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (authorization === '') {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = authorization.split(' ')[1];
  const userCode = decodeJwt(token);

  if (!userCode) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
  req.user = userCode.data;
  next();
};

module.exports = validateJWT;