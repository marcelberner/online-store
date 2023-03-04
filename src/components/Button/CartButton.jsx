import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "react-query";

import { cartAdd } from "../../store/userData";

import useData from "../../hooks/useData";

import "./CartButton.scss";

const CartButton = (props) => {
  const userId = useSelector((state) => state.userAuth.userId);

  const dispatch = useDispatch();
  const { addToCart } = useData();
  const queryClient = useQueryClient();

  const addToCartMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user-cart", { exact: true }]);
    },
  });

  const addToCartHandler = async () => {
    dispatch(cartAdd({ productId: props.id, amount: 1, price: props.price }));

    if (userId) {
      addToCartMutation.mutate({
        productId: props.id,
        price: props.price,
      });
    }
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
