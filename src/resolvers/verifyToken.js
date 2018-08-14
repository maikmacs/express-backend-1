import jwt from 'jsonwebtoken';
import User from '../models/users';

const secret = 'Jwjwo2!';
const tokenPrefix = 'JWT';

export const verifyToken = token => {
  const [prefix, receivedToken] = token.split(' ');

  let user = null;
  if (!receivedToken) {
    throw new Error('No token');
  }

  if (prefix != tokenPrefix) {
    throw new Error('Heder Invalid');
  }

  jwt.verify(receivedToken, secret, (err, payload) => {
    if (err) throw new Error('Invalid Token');
    console.log(payload);
    user = User.findById(payload.id).exec();
  });

  if (!user) throw new Error('User Not Exist');

  return user;
};
