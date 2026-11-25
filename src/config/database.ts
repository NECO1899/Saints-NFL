import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const db = mysql.createPool({
  host: process.env.MYSQLHOST || 'localhost',
  user: process.env.MYSQLUSER|| 'root',
  password: process.env.MYSQLPASSWORD !== undefined ? process.env.MYSQLPASSWORD : '',
  database: process.env.MYSQLDATABASE || 'nfl_saints',
  port: process.env.MYSQLPORT ? Number(process.env.MYSQLPORT) : 3306,
});
