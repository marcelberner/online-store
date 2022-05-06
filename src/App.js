import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import useInitial from "./hooks/useInitial";

import ScrollToTop from "./scripts/ScrollToTop";
import Layout from "./layout/Layout";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/AuthPages/LoginPage";
import WishlistPage from "./pages/Products/WishlistPage";
import AccountPage from "./pages/Account/AccountPage";
import ProductDetail from "./pages/Products/ProductDetail";
import ProductList from "./pages/Products/ProductList";

import UserDetail from "./pages/Account/UserDetail";
import OwnProducts from "./pages/Account/OwnProducts";
import Orders from "./pages/Account/Orders";
import Questions from "./pages/Account/Questions";

import Cart from "./pages/CartPage/Cart";
import CartItems from "./pages/CartPage/CartItems";
import Delivery from "./pages/CartPage/Delivery";
import Sumarry from "./pages/CartPage/Sumarry";

function App() {
  const userId = useSelector((state) => state.userAuth.token);
  const orderProducts = useSelector((state) => state.orderData.products);
  const customerData = useSelector((state) => state.orderData.customerData);
  const requestStatus = useSelector((state) => state.dataRequest.requestStatus);

  const initialDataImport = useInitial();

  useEffect(() => {
    initialDataImport();
  }, [initialDataImport, requestStatus]);

  return (
    <Layout>
      <ScrollToTop>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:productCategory" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/listy-zakupowe" element={<WishlistPage />} />
            {!userId && <Route path="/logowanie" element={<LoginPage />} />}
            {userId && <Route path="/konto" element={<AccountPage />}>
              <Route path="" element={<UserDetail />} />
              <Route path="twoje-produkty" element={<OwnProducts />} />
              <Route path="historia-zamowien" element={<Orders />} />
              <Route path="wyslij-zapytanie" element={<Questions />} />
            </Route>}
            <Route path="/koszyk" element={<Cart />}>
              <Route path="" element={<CartItems/>}/>
              {orderProducts && <Route path="dostawa" element={<Delivery/>}/>}
              {customerData && <Route path="podsumowanie" element={<Sumarry/>}/>}
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Main>
        <Footer />
      </ScrollToTop>
    </Layout>
  );
}

export default App;
