import jwt from 'jsonwebtoken';
import config from '../configs/dotenv.config';

export const generateToken = (payload: object, expiresIn = '1h') => {
  return jwt.sign(payload, config.JWT_SECRET, { expiresIn });
};
