import pkg from "pg";
import * as fs from "fs/promises";

const {Client}=pkg;

const client = new Client({
  user: "postgres",
  password: "kK06112005!",
  host: "localhost",
  port: 5432,
  database: "myshop",
});

async function extractData() {
  await client.connect();

  const categoriesRes = await client.query("SELECT * FROM categories");
  const productsRes = await client.query("SELECT * FROM products");

  const data = {
    categories: categoriesRes.rows,
    products: productsRes.rows,
  };

  await fs.writeFile("data.json", JSON.stringify(data, null, 2));
  console.log("✅ Data extracted to data.json");

  await client.end();
}

async function importData() {
  await client.connect();

  const rawData = await fs.readFile("data.json", "utf-8");
  const { categories, products } = JSON.parse(rawData);

  await client.query("DELETE FROM products");
  await client.query("DELETE FROM categories");

  for (const cat of categories) {
    await client.query(
      "INSERT INTO categories (id, name) VALUES ($1, $2)",
      [cat.id, cat.name]
    );
  }

  for (const prod of products) {
    await client.query(
      "INSERT INTO products (id, name, price, description, category_id) VALUES ($1, $2, $3, $4, $5)",
      [prod.id, prod.name, prod.price, prod.description, prod.category_id]
    );
  }

  console.log("✅ Data imported from data.json");

  await client.end();
}

const mode = process.argv[2];

if (mode === "extract") {
  extractData();
} else if (mode === "import") {
  importData();
} else {
  console.error("❌ Invalid mode. Use: extract or import");
}
