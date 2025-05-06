import mysql from 'mysql2/promise'  

export async function connectDb() {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Mano1805',
      database: 'test'
    });
  
    return connection;
  }
  