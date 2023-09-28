const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const config = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const tokenJwt = (id) => 
  jwt.sign({ data: { id } }, secret, config);
  
const decodeJwt = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};

module.exports = {
  tokenJwt,
  decodeJwt,
};