import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todolist",
  password: "123",
  port: 5432,
});

export async function getTask() {
  try {
    const res = await pool.query('SELECT * FROM "users"');
    return res.rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function closePool() {
  try {
    await pool.end();
  } catch (err) {
    // ignore
  }
}

/*
export const query = (text: string, params?: any) => {
    return pool.query(text, params);
}
*/
