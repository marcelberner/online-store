import { useSelector, useDispatch } from "react-redux";

import useData from "../../../hooks/useData";

import { changeRequestStatus } from "../../../store/dataRequest";
import { cartRemove, cartDelete, cartAdd } from "../../../store/userData";

import "./CartItem.scss";

const CartItem = (props) => {
  const userData = useSelector((state) => state.userData.userData);
  const isAuth = useSelector((state) => state.userAuth.token);
  const dispatch = useDispatch();

  const { dataRequest } = useData();

  const increseAmount = async () => {
    if(isAuth){
      const increseAmount = await dataRequest({
        method: "PATCH",
        database: `users/${userData.id}/cart/${props.cart.id}`,
        body: {
          productId: props.id,
          amount: props.amount + 1,
          price: props.price,
        },
      });
    }
    else dispatch(cartAdd({
      productId: props.cart.productId,
      amount: props.cart.amount,
      price: props.cart.price,
    }))

    dispatch(changeRequestStatus());
  };

  const decreseAmount = async () => {
    if (isAuth) {
      if (props.amount === 1) productCartRemove();
      const decreseAmount = await dataRequest({
        method: "PATCH",
        database: `users/${userData.id}/cart/${props.cart.id}`,
        body: {
          productId: props.id,
          amount: props.amount - 1,
          price: props.price,
        },
      });
    } else
      dispatch(
        cartRemove({
          productId: props.cart.productId,
          amount: props.cart.amount,
          price: props.cart.price,
        })
      );

    dispatch(changeRequestStatus());
  };

  const productCartRemove = async () => {
    if (isAuth) {
      const removeProduct = await dataRequest({
        method: "DELETE",
        database: `users/${userData.id}/cart/${props.cart.id}`,
      });
    } else
      dispatch(
        cartDelete({
          productId: props.cart.productId,
          amount: props.cart.amount,
          price: props.cart.price,
        })
      );

    dispatch(changeRequestStatus());
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
