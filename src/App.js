import React,{ useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import useInitial from "./hooks/useInitial";

import ScrollToTop from "./scripts/ScrollToTop";
import Layout from "./layout/Layout";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = React.lazy(() => import("./pages/AuthPages/LoginPage"));
const WishlistPage = React.lazy(() => import("./pages/Products/WishlistPage"));
const AccountPage = React.lazy(() => import("./pages/Account/AccountPage"));
const ProductDetail = React.lazy(() => import("./pages/Products/ProductDetail"));
const ProductList = React.lazy(() => import("./pages/Products/ProductList"));

const UserDetail = React.lazy(() => import("./pages/Account/UserDetail"));
const OwnProducts = React.lazy(() => import("./pages/Account/OwnProducts"));
const Orders = React.lazy(() => import("./pages/Account/Orders"));
const Questions = React.lazy(() => import("./pages/Account/Questions"));

const Cart = React.lazy(() => import("./pages/CartPage/Cart"));
const CartItems = React.lazy(() => import("./pages/CartPage/CartItems"));
const Delivery = React.lazy(() => import("./pages/CartPage/Delivery"));
const Sumarry = React.lazy(() => import("./pages/CartPage/Sumarry"));

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
          <Suspense fallback={<p>Loading...</p>}>
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
          </Suspense>
        </Main>
        <Footer />
      </ScrollToTop>
    </Layout>
  );
}

export default App;
