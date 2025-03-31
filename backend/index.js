require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const app = express();


// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "myshop",
  password: "kK06112005!",
  port: 5432, // Default PostgreSQL port
});

// Middleware
app.use(express.json());

// Route to get all users
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
const port = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
