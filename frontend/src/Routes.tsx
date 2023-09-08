import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Reviews from "./pages/ReviewsPage/Review";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CartPage from "./pages/CartPage/CartPage";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/reviews" element={<Reviews />} />
    <Route path="/checkout" element={<CartPage />} />
  </Routes>
);

export default Router;
