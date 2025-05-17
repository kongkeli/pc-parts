import React, { useEffect, useState } from "react";
import {
  Container,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
}

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <Container sx={{ mt: { xs: 7, sm: 10 } }}>
      <Typography variant="h4" gutterBottom>
        Κατηγορίες
      </Typography>
      <List>
        {categories.map((category) => (
          <ListItemButton
            key={category.id}
            component={Link}
            to={`/categories/${category.id}`}
            divider
          >
            <ListItemText primary={category.name} />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
}

export default Categories;
