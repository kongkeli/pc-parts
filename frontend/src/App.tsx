import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "../pages/Homepage";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import CategoryProducts from "../pages/CategoryProducts";
import ProductDetails from "../pages/ProductDetails";
import { Container, Toolbar } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Toolbar />
      <Container sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
