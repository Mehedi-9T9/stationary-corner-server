import dotenv from 'dotenv';

import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
  Database_URI: process.env.DATABASE_URI,
  port: process.env.PORT,
};
