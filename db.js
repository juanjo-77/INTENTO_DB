const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT,
  ssl: { rejectUnauthorized: false },
  max: 10,          // 👈 máximo 10 conexiones simultáneas
  idleTimeoutMillis: 30000, // 👈 30s antes de liberar conexiones inactivas
  connectionTimeoutMillis: 10000
});

module.exports = pool;