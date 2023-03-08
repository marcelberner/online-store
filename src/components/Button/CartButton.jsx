import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "react-query";

import { productAdd } from "../../store/orderData";

import useData from "../../hooks/useData";

import "./CartButton.scss";

const CartButton = (props) => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const { addToCart } = useData();
  const queryClient = useQueryClient();

  const addToCartMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["user-cart", { exact: true }]);
    },
  });

  const addToCartHandler = async () => {
    if (token)
      addToCartMutation.mutate({
        productId: props.id,
        price: props.price,
      });
    else
      dispatch(
        productAdd({
          _id: props.id,
          amount: 1,
          price: props.price,
          img: props.img,
          name: props.name,
        })
      );
  };

  return (
    <button
      onClick={addToCartHandler}
      className={`cart-button ${props.hide && "cart-button--hidden"} ${
        props.size === "large" && "cart-button--large"
      } ${props.size === "medium" && "cart-button--medium"} ${
        props.size === "small" && "cart-button--small"
      }`}
    >
      <i className="fa-solid fa-cart-arrow-down"></i>
      {props.size === "large" && (
        <span className="cart-button__text">Dodaj do koszyka</span>
      )}
    </button>
  );
};

export default CartButton;
