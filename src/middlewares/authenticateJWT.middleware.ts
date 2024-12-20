import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../configs/dotenv.config';
import { userModel } from '../models/user.model';

export const authenticateJWTMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: 'Authorization header is missing' });
    return;
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Invalid or expired token' });
      return;
    }

    // Type assertion: Ensure `decoded` matches the expected structure of `userModel`
    req.user = decoded as typeof userModel;

    next();
  });
};
