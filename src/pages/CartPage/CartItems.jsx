import { useQuery } from "react-query";
import { useEffect } from "react";

import useData from "../../hooks/useData";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setTotalPrice } from "../../store/orderData";

import CartItem from "../../components/Cart/CartItem/CartItem";
import LoadSpinner from "../../components/UI/LoadSpinner/LoadSpinner";

import "./CartItems.scss";

const CartItems = () => {
  const userId = localStorage.getItem("userId");
  const cartProducts = useSelector((state) => state.orderData.products);

  const { getCartItems } = useData();
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ["user-cart", { exact: true }],
    queryFn: () => getCartItems(),
  });

  useEffect(() => {
    if (!userId) return;
    dispatch(setProducts(data.cart));
    dispatch(setTotalPrice(data.totalPrice));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="cart-items">
      {isLoading ? (
        <LoadSpinner />
      ) : userId ? (
        data.cart.map((product, index) => (
          <CartItem
            productId={product._id}
            key={index}
            img={product.img}
            name={product.name}
            amount={product.amount}
            price={product.price}
          />
        ))
      ) : (
        cartProducts.map((product, index) => (
          <CartItem
            productId={product.productId}
            key={index}
            img={product.img}
            name={product.name}
            amount={product.amount}
            price={product.price}
          />
        ))
      )}
    </div>
  );
};

export default CartItems;
