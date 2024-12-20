import dotenv from 'dotenv';

dotenv.config();

export default {
  JWT_SECRET: process.env.JWT_SECRET || 'dummy_secret_key',
  PORT: process.env.PORT || '3000',
};
