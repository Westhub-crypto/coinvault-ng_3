// backend/config/db.js

const { Pool } = require('pg');

// Make sure you set the DB URL in Render environment variables as DB_URL
const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Render PostgreSQL
  },
});

// Test connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to PostgreSQL database successfully');
    release();
  }
});

module.exports = pool;
