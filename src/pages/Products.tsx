import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const products = [
  { id: 1, name: "Graphics Card", price: "€500" },
  { id: 2, name: "Gaming Monitor", price: "€300" },
  { id: 3, name: "Mechanical Keyboard", price: "€150" }
];

function Products() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Προϊόντα</Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="textSecondary">{product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
