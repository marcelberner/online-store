import { useSelector, useDispatch } from "react-redux";

import useData from "../../../hooks/useData";

import { cartRemove, cartDelete, cartAdd } from "../../../store/userData";

import "./CartItem.scss";

const CartItem = (props) => {
  const userId = useSelector((state) => state.userAuth.userId);
  const dispatch = useDispatch();

  const { dataRequest } = useData();

  const increseAmount = async () => {
    dispatch(
      cartAdd({
        productId: props.cart.productId,
        amount: props.cart.amount,
        price: props.cart.price,
      })
    );
    if (userId) {
      await dataRequest({
        method: "POST",
        database: `users/${userId}/cart/add`,
        body: {
          productId: props.cart.productId,
          amount: props.cart.amount,
          price: props.cart.price,
        },
      });
    }
  };

  const decreseAmount = async () => {
    dispatch(
      cartRemove({
        productId: props.cart.productId,
        amount: props.cart.amount,
        price: props.cart.price,
      })
    );
    if (userId) {
      await dataRequest({
        method: "POST",
        database: `users/${userId}/cart/remove`,
        body: {
          productId: props.cart.productId,
          amount: props.cart.amount,
          price: props.cart.price,
        },
      });
    }
  };

  const productCartRemove = async () => {
    dispatch(
      cartDelete({
        productId: props.cart.productId,
        amount: props.cart.amount,
        price: props.cart.price,
      })
    );
    if (userId) {
      await dataRequest({
        method: "DELETE",
        database: `users/${userId}/cart/delete`,
        body: {productId: props.cart.productId},
      });
    }
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
