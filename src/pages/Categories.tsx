import { Container, List, ListItem, ListItemText, Typography } from "@mui/material";

const categories = ["Κάρτες Γραφικών", "Μόνιτορ", "Πληκτρολόγια"];

function Categories() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Κατηγορίες</Typography>
      <List>
        {categories.map((category, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Categories;
