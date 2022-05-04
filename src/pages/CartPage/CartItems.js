import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import useData from "../../hooks/useData";

import CartItem from "../../components/Cart/CartItem/CartItem";

import "./CartItems.scss";

const CartItems = () => {
  const cart = useSelector((state) => state.userData.cart);
  const [cartProducts, setCartProducts] = useState();

  const { dataRequest } = useData();

  const getProductData = useCallback(async () => {
    const products = await dataRequest({ method: "GET", database: "products" });

    const seekProducts = [];

    for (let i = 0; i < cart.length; i++) {
      const seekProduct = products.find(
        (product) => product.id === cart[i].productId
      );
      seekProducts.push(seekProduct);
    }

    setCartProducts(seekProducts);
  }, [cart, dataRequest]);

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  return (
    <div className="cart-items">
      {cartProducts &&
        cartProducts.map((product, index) => (
          <CartItem
            key={index}
            img={product.img}
            name={product.name}
             amount={cart[index] && cart[index].amount}
            cart={cart[index]}
          />
        ))}
    </div>
  );
};

export default CartItems;
