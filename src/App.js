import { React, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import useData from "./hooks/useData";
import { setWishlist, setUserData, setCart } from "./store/userData";

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
import Refund from "./pages/Account/Refund";
import Questions from "./pages/Account/Questions";

import Cart from "./pages/CartPage/Cart";
import CartItems from "./pages/CartPage/CartItems";
import Delivery from "./pages/CartPage/Delivery";
import Sumarry from "./pages/CartPage/Sumarry";

function App() {
  const userId = useSelector((state) => state.userAuth.token);
  const requestStatus = useSelector((state) => state.dataRequest.requestStatus);

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
              phone: user.phone
            })
            );
            
            if (user.wishlist !== "false"){
            const wishlistArray = [];
  
            for(const key in user.wishlist){
              wishlistArray.push({
                id: key,
                productId: user.wishlist[key].productId
              })
            }
            
            dispatch(setWishlist(wishlistArray));
          }
          
          if (user.cart !== "false"){
            const cartArray = [];
            
            for(const key in user.cart){
              cartArray.push({
                id: key,
                productId: user.cart[key].productId,
                amount: user.cart[key].amount,
                price: user.cart[key].price,
              })
            }
            
            dispatch(setCart(cartArray));
          }
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
              <Route path="zamowienia-w-realizacji" element={<Orders />} />
              <Route path="zwroty-i-reklamacje" element={<Refund />} />
              <Route path="wyslij-zapytanie" element={<Questions />} />
            </Route>}
            <Route path="/koszyk" element={<Cart />}>
              <Route path="" element={<CartItems/>}/>
              <Route path="dostawa" element={<Delivery/>}/>
              <Route path="podsumowanie" element={<Sumarry/>}/>
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
