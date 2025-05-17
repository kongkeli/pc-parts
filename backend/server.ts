import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

const { Pool } = pkg;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
});

(async () => {
  try {
    const client = await pool.connect();
    try {
      const res = await client.query("SELECT current_database();");
      const dbName = res.rows?.[0]?.current_database;
      console.log(`✅ Connected to PostgreSQL database: ${dbName}`);
    } finally {
      client.release(); 
    }
  } catch (err) {
    console.error("❌ Failed to connect to PostgreSQL:", err);
    process.exit(1); 
  }
})();


app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

app.get("/api/products", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    console.log("Fetching data");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/categories", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM categories");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Server Error");
  }
});

app.get("/api/categories/:id/products", async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  console.log("Fetching products for category ID:", categoryId);
  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE category_id = $1",
      [categoryId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching products for category:", err);
    res.status(500).json({ error: "Error fetching products for category" });
  }
});

app.get("/api/products/:id", (req: Request, res: Response) => {
  const productId = req.params.id;

  pool.query("SELECT * FROM products WHERE id = $1", [productId])
    .then(result => {
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Error fetching product details" });
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
