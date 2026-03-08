const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",           // PostgreSQL default user
  host: "localhost",
  database: "pg_booking_db",  // the database you created
  password: "postgres@123",   // your PostgreSQL password
  port: 5432,
});

module.exports = pool;