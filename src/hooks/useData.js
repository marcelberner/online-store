import axios from "axios";

const useData = () => {
  const userId = localStorage.getItem("userId");

  const url = {
    dev: "http://localhost:5000/api/",
    prod: "https://online-store-backend.onrender.com/api/",
  };

  const getProducts = (filter) => {
    return axios
      .get(url.prod + `products${filter || ""}`)
      .then((response) => response.data);
  };

  const getProductById = (productId) => {
    return axios
      .get(url.prod + `products/${productId}`)
      .then((response) => response.data.product);
  };

  const toggleWishlist = (productId) => {
    if (!userId) return;
    return axios
      .post(url.prod + `users/${userId}/wishlist/set/${productId}`)
      .then((response) => response.data);
  };

  const getWishlist = () => {
    if (!userId) return;
    return axios
      .get(url.prod + `users/${userId}/wishlist`)
      .then((response) => response.data.wishlist);
  };

  const getWishlistProduct = (productId) => {
    if (!userId) return;
    return axios
      .get(url.prod + `users/${userId}/wishlist/get/${productId}`)
      .then((response) => response.data.state);
  };

  const addToCart = (data) => {
    if (!userId) return;
    return axios
      .post(url.prod + `users/${userId}/cart/add`, { ...data })
      .then((response) => response.data);
  };

  const removeFromCart = (productId) => {
    if (!userId) return;
    return axios
      .post(url.prod + `users/${userId}/cart/remove`, { ...productId })
      .then((response) => response.data);
  };

  const deleteFromCart = (productId) => {
    if (!userId) return;
    return axios
      .delete(url.prod + `users/${userId}/cart/delete`, { ...productId })
      .then((response) => response.data);
  };

  const clearCart = () => {
    if (!userId) return;
    return axios
      .delete(url.prod + `users/${userId}/cart/clear`)
      .then((response) => response.data);
  };

  const getCartItems = () => {
    if (!userId) return;
    return axios
      .get(url.prod + `users/${userId}/cart`)
      .then((response) => response.data);
  };

  const getUserData = () => {
    if (!userId) return;
    return axios
      .get(url.prod + `users/${userId}`)
      .then((response) => response.data.userData);
  };

  const updateUserData = (data) => {
    if (!userId) return;
    return axios
      .patch(url.prod + `users/${userId}/update`, { ...data })
      .then((response) => response.data);
  };

  const sendOrder = (data) => {
    return axios
      .post(url.prod + `orders/order`, { ...data })
      .then((response) => response.data);
  };

  const getOrders = () => {
    return axios
      .get(url.prod + `orders/${userId}`)
      .then((response) => response.data.orders);
  };

  const authRequest = (data) => {
    return axios.post(
      url.prod + `users/${data.currentForm === "signup" ? "signup" : "login"}`,
      {
        ...data,
      }
    );
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
    toggleWishlist,
    getWishlist,
    getWishlistProduct,
    updateUserData,
    sendOrder,
    getOrders,
    authRequest,
  };
};

export default useData;
