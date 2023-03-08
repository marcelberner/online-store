import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { setResolution } from "./store/window";

import ScrollToTop from "./components/UI/ScrollToTop.jsx";
import Layout from "./layout/Layout";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import LoadSpinner from "./components/UI/LoadSpinner/LoadSpinner";
import ScrollButton from "./components/Button/ScrollButton";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = React.lazy(() => import("./pages/AuthPages/LoginPage"));
const WishlistPage = React.lazy(() => import("./pages/Products/WishlistPage"));
const ProductDetail = React.lazy(() =>
  import("./pages/Products/ProductDetail")
);
const ProductList = React.lazy(() => import("./pages/Products/ProductList"));
const InProgress = React.lazy(() =>
  import("./components/UI/InProgress/InProgress")
);

const AccountPage = React.lazy(() => import("./pages/Account/AccountPage"));
const UserDetail = React.lazy(() => import("./pages/Account/UserDetail"));
const OwnProducts = React.lazy(() => import("./pages/Account/OwnProducts"));
const Orders = React.lazy(() => import("./pages/Account/Orders"));

const Cart = React.lazy(() => import("./pages/CartPage/Cart"));
const CartItems = React.lazy(() => import("./pages/CartPage/CartItems"));
const Delivery = React.lazy(() => import("./pages/CartPage/Delivery"));
const Sumarry = React.lazy(() => import("./pages/CartPage/Sumarry"));

function App() {
  const userId = localStorage.getItem("userId");
  const orderProducts = useSelector((state) => state.orderData.products);
  const customerData = useSelector((state) => state.orderData.customerData);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(setResolution(window.innerWidth));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <ScrollToTop>
        {location.pathname !== "/logowanie" &&
          location.pathname !== "/rejestracja" && <Header />}
        <Main>
          <ScrollButton />
          <Suspense fallback={<LoadSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/kontakt" element={<InProgress />} />
              <Route path="/dostawa" element={<InProgress />} />
              <Route path="/zwroty-i-reklamacje" element={<InProgress />} />
              <Route path="/status-zamowienia" element={<InProgress />} />
              <Route path="/raty" element={<InProgress />} />
              <Route path="/poradniki" element={<InProgress />} />
              <Route path="/aktualnosci" element={<InProgress />} />
              <Route path="/wyprzedaz" element={<InProgress />} />
              <Route path="/karty-podarunkowe" element={<InProgress />} />
              <Route path="/o-nas" element={<InProgress />} />
              <Route path="/dane-firmy" element={<InProgress />} />
              <Route path="/news" element={<InProgress />} />
              <Route
                path="/polityka-prywatnosci-i-cookies"
                element={<InProgress />}
              />
              <Route path="/regulamin-sklepu" element={<InProgress />} />
              <Route
                path="/products/:productCategory"
                element={<ProductList />}
              />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/listy-zakupowe" element={<WishlistPage />} />
              {!userId && <Route path="/logowanie" element={<LoginPage />} />}
              {userId && (
                <Route path="/konto" element={<AccountPage />}>
                  <Route path="" element={<UserDetail />} />
                  <Route path="twoje-produkty" element={<OwnProducts />} />
                  <Route path="historia-zamowien" element={<Orders />} />
                </Route>
              )}
              <Route path="/koszyk" element={<Cart />}>
                <Route path="" element={<CartItems />} />
                {orderProducts && (
                  <Route path="dostawa" element={<Delivery />} />
                )}
                {customerData && (
                  <Route path="podsumowanie" element={<Sumarry />} />
                )}
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Main>
        {location.pathname !== "/logowanie" &&
          location.pathname !== "/rejestracja" && <Footer />}
      </ScrollToTop>
    </Layout>
  );
}

export default App;
