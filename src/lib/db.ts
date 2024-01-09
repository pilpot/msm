import { Pool } from 'pg';

const pool = new Pool({
  database: import.meta.env.VITE_PGDATABASE,
  user: import.meta.env.VITE_PGUSER,
  password: import.meta.env.VITE_PGPASSWORD,
  host: import.meta.env.VITE_PGHOST,
  port: import.meta.env.VITE_PGPORT ?? 5432
});

export const connectToDB = async () => await pool.connect();

