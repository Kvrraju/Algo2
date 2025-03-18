import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgre',
  host: 'localhost',
  database: 'public',
  password: 'Admin@12300',
  port: 5432,
});

export default pool;
