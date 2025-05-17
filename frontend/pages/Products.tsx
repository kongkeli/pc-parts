import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Stack,
} from "@mui/material";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Category {
  id: number;
  name: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      let url = "http://localhost:5000/api/products";
      if (selectedCategory) {
        url = `http://localhost:5000/api/categories/${selectedCategory}/products`;
      }

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ mt: { xs: 7, sm: 10 } }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Category</InputLabel>
          <Select
            value={selectedCategory}
            label="Filter by Category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setSelectedCategory("")}
        >
          Reset Filters
        </Button>

        <TextField
          label="Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flexGrow: 1 }}
        />
      </Stack>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">Error: {error}</Typography>
      ) : (
        <List>
          {filteredProducts.length === 0 ? (
            <Typography>No matching products found.</Typography>
          ) : (
            filteredProducts.map((product) => (
              <ListItem
                key={product.id}
                divider
                component={Link}
                to={`/products/${product.id}`}
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText
                  primary={product.name}
                  secondary={`Price: €${product.price}`}
                />
              </ListItem>
            ))
          )}
        </List>
      )}
    </Container>
  );
}

export default Products;
