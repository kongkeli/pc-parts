import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

type User = {
  id: number;
  name: string;
};

function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container sx={{ mt: { xs: 7, sm: 10 } }}>
      <Typography variant="h3" gutterBottom>
        Καλώς ήρθατε στο E-Shop!
      </Typography>
      <Typography paragraph>
        Εδώ μπορείτε να βρείτε τα καλύτερα PC Parts σε ολόκληρη την αγορά.
      </Typography>

      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Home;
