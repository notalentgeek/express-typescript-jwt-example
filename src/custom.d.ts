import { User } from './models/user.model';

declare global {
  namespace Express {
    interface Request {
      user?: User | null;  // Extend the Request interface with the `user` property
    }
  }
}
