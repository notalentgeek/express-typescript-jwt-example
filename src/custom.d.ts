import { User } from './models/user.model'; // Import User type if you have one

declare global {
  namespace Express {
    interface Request {
      user?: User | null;  // Extend the Request interface with the `user` property
    }
  }
}
