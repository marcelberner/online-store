import React from "react";

import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./scripts/ScrollToTop";
import Layout from "./layout/Layout";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/AuthPages/LoginPage";
import ProductDetail from "./pages/Products/ProductDetail";
import ProductList from "./pages/Products/ProductList";

function App() {
  return (
    <Layout>
      <ScrollToTop>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:productCategory" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/logowanie" element={<LoginPage />} />
          </Routes>
        </Main>
        <Footer />
      </ScrollToTop>
    </Layout>
  );
}

export default App;
