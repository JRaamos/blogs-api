const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET; 

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

const validateJWT = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }
  const token = extractToken(authorization);
  const decoded = jwt.verify(token, secret);

  const user = await userService.getUserById(decoded.data.id);

  if (!user) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
  req.user = user;
  next();
};

module.exports = validateJWT;