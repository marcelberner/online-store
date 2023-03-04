// import { useSelector } from "react-redux";
import axios from "axios";

const useData = () => {
  // const token = useSelector((state) => state.userAuth.token);
  const userId = localStorage.getItem("userId");

  const url = {
    dev: "http://localhost:5000/api/",
    prod: "https://online-store-backend.onrender.com/api/",
  };

  const getProducts = (filter) => {
    return axios
      .get(url.dev + `products${filter || ""}`)
      .then((response) => response.data.products);
  };

  const getProductById = (productId) => {
    return axios
      .get(url.dev + `products/${productId}`)
      .then((response) => response.data.product);
  };

  const addToCart = (data) => {
    return axios
      .post(url.dev + `users/${userId}/cart/add`, { ...data })
      .then((response) => response.data);
  };

  const removeFromCart = (productId) => {
    return axios
      .post(url.dev + `users/${userId}/cart/remove`, { ...productId })
      .then((response) => response.data);
  };

  const deleteFromCart = (productId) => {
    return axios
      .delete(url.dev + `users/${userId}/cart/delete`, { ...productId })
      .then((response) => response.data);
  };

  const clearCart = () => {
    return axios
      .delete(url.dev + `users/${userId}/cart/clear`)
      .then((response) => response.data);
  };

  const getCartItems = () => {
    return axios
      .get(url.dev + `users/${userId}/cart`)
      .then((response) => response.data);
  };

  const getUserData = () => {
    return axios
      .get(url.dev + `users/${userId}`)
      .then((response) => response.data.userData);
  };

  return {
    getProducts,
    getProductById,
    addToCart,
    getCartItems,
    removeFromCart,
    deleteFromCart,
    getUserData,
    clearCart,
  };
};

export default useData;
