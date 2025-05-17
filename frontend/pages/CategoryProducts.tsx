import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";

interface Product {
  id: number;
  name: string;
  price?: number;
}

function CategoryProducts() {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`http://localhost:5000/api/categories/${id}/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container sx={{ mt: { xs: 7, sm: 10 } }}>
      <Typography variant="h4" gutterBottom>
        Προϊόντα Κατηγορίας
      </Typography>
      {products.length === 0 ? (
        <Typography>Δεν υπάρχουν προϊόντα σε αυτή την κατηγορία.</Typography>
      ) : (
        <List>
          {products.map((product) => (
            <ListItem key={product.id} divider>
              <ListItemText
                primary={
                  <Link
                    to={`/products/${product.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {product.name}
                  </Link>
                }
                secondary={product.price ? `Τιμή: €${product.price}` : null}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default CategoryProducts;
