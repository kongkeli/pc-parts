import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import { Container } from "@mui/material";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
