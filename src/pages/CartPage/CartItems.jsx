import { useQuery } from "react-query";

import useData from "../../hooks/useData";

import CartItem from "../../components/Cart/CartItem/CartItem";
import LoadSpinner from "../../components/UI/LoadSpinner/LoadSpinner";

import "./CartItems.scss";

const CartItems = () => {
  const { getCartItems } = useData();

  const { data, isLoading } = useQuery({
    queryKey: ["user-cart", { exact: true }],
    queryFn: () => getCartItems(),
  });

  return (
    <div className="cart-items">
      {isLoading ? (
        <LoadSpinner />
      ) : (
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
      )}
    </div>
  );
};

export default CartItems;
