import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../configs/dotenv.config';
import { userModel } from '../models/user.model';

export const loginController = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === userModel.username && password === userModel.password) {
    const token = jwt.sign({ id: userModel.id, username: userModel.username }, config.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ message: 'Login successful', token });

    return;
  }

  res.status(401).json({ message: 'Invalid credentials' });
};
