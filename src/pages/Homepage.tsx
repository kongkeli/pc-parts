import { Container, Typography } from "@mui/material";

function Home() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Καλώς ήρθατε στο E-Shop!
      </Typography>
      <Typography>
        Εδώ μπορείτε να βρείτε τα καλύτερα PC Parts στην αγορα.
      </Typography>
    </Container>
  );
}

export default Home;
