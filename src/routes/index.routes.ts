import { Router } from 'express';
import authRoutes from './auth.routes';
import { authenticateJWTMiddleware } from '../middlewares/authenticateJWT.middleware';

const router = Router();

router.use(authRoutes);
router.get('/protected', authenticateJWTMiddleware, (req, res) => {
  res.json({ message: 'Access granted', user: req.user });
});

router.get('/', (req, res) => {
  res.send('Welcome to the API');
});

export default router;
