import { React, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import useData from "./hooks/useData";
import { wishlistAdd, setUserData } from "./store/userData";

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

function App() {
  const userId = useSelector((state) => state.userAuth.token);
  const dispatch = useDispatch();

  const { dataRequest } = useData();

  const importData = useCallback(
    (resData) => {
      resData.forEach((user) => {
        if (user.userId === userId) {
          dispatch(
            setUserData({
              id: user.id,
              name: user.name,
              surname: user.surname,
              email: user.email,
              address: user.address,
            })
          );

          if (user.wishlist === "false") return;
          else dispatch(wishlistAdd(user.wishlist));
        }
      });
    },
    [dispatch, userId]
  );

  const initialDataImport = useCallback(async () => {
    const resData = await dataRequest({ method: "GET", database: "users" });

    importData(resData);
  }, [dataRequest, importData]);

  useEffect(() => {
    initialDataImport();
  }, [initialDataImport]);

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
            {userId && <Route path="/konto" element={<AccountPage />} />}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Main>
        <Footer />
      </ScrollToTop>
    </Layout>
  );
}

export default App;
