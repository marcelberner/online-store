import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "react-query";

import useData from "../../../hooks/useData";

import { productAdd, productRemove, productDelete } from "../../../store/orderData";

import "./CartItem.scss";

const CartItem = (props) => {
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();

  const { addToCart, removeFromCart, deleteFromCart } = useData();
  const queryClient = useQueryClient();

  const addToCartMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["user-cart", { exact: true }]);
    },
  });

  const removeFromCartMutation = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["user-cart", { exact: true }]);
    },
  });

  const deleteCartMutation = useMutation({
    mutationFn: deleteFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["user-cart", { exact: true }]);
    },
  });

  const increseAmount = async () => {
    if (userId) {
      addToCartMutation.mutate({
        productId: props.productId,
      });
    } else
      dispatch(
        productAdd({
          productId: props.productId,
          amount: props.amount,
          price: props.price,
        })
      );
  };

  const decreseAmount = async () => {
    if (userId) {
      removeFromCartMutation.mutate({
        productId: props.productId,
      });
    } else
      dispatch(
        productRemove({
          productId: props.productId,
          amount: props.amount,
          price: props.price,
        })
      );
  };

  const productCartRemove = async () => {
    if (userId) {
      deleteCartMutation.mutate({
        productId: props.productId,
      });
    } else
      dispatch(
        productDelete({
          productId: props.productId,
          amount: props.amount,
          price: props.price,
        })
      );
  };

  return (
    <div className={`cart-item ${props.compact ? "cart-item--compact" : ""}`}>
      <img
        src={props.img}
        alt="product img"
        className={`cart-item__image ${
          props.compact ? "cart-item__image--compact" : ""
        }`}
      />
      <div className="cart-item__name">
        <span>{props.name}</span>
      </div>
      <div
        className={`cart-item__amount ${
          props.compact ? "cart-item__amount--hide" : ""
        }`}
      >
        <i
          className="fa-solid fa-plus cart-item__icon"
          onClick={increseAmount}
        ></i>
        <span className="cart-item__number">{props.amount}</span>
        <i
          className="fa-solid fa-minus cart-item__icon"
          onClick={decreseAmount}
        ></i>
      </div>
      <div
        className={`cart-item__remove ${
          props.compact ? "cart-item__remove--hide" : ""
        }`}
      >
        <i
          className="fa-solid fa-trash-can cart-item__icon"
          onClick={productCartRemove}
        ></i>
      </div>
    </div>
  );
};

export default CartItem;
