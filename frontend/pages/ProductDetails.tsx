import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Button,
} from "@mui/material";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product details");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Container sx={{ mt: { xs: 7, sm: 10 } }}>
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="body1" paragraph>
        {product.description}
      </Typography>
      <Typography variant="h6" color="green">
        AVAILABLE
      </Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        €{product.price}
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Back to Products</Button>
        </Link>
      </Box>
    </Container>
  );
}

export default ProductDetails;
