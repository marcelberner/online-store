import { useSelector, useDispatch } from "react-redux";

import useData from "../../../hooks/useData";

import { changeRequestStatus } from "../../../store/dataRequest";

import "./CartItem.scss";

const CartItem = (props) => {
  const userData = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch();

  const { dataRequest } = useData();

  const increseAmount = async () => {
    const increseAmount = await dataRequest({
      method: "PATCH",
      database: `users/${userData.id}/cart/${props.cart.id}`,
      body: {
        productId: props.id,
        amount: props.amount + 1,
        price: props.price,
      },
    });

    dispatch(changeRequestStatus());
  };

  const decreseAmount = async () => {
    if (props.amount === 1) productCartRemove();
    else {
      const decreseAmount = await dataRequest({
        method: "PATCH",
        database: `users/${userData.id}/cart/${props.cart.id}`,
        body: {
          productId: props.id,
          amount: props.amount - 1,
          price: props.price,
        },
      });

      dispatch(changeRequestStatus());
    }
  };
  
  const productCartRemove = async () => {
    const removeProduct = await dataRequest({
      method: "DELETE",
      database: `users/${userData.id}/cart/${props.cart.id}`,
    });

    dispatch(changeRequestStatus());
  };

  return (
    <div className="cart-item">
      <img src={props.img} alt="product img" className="cart-item__image" />
      <div>
        <span className="cart-item__name">{props.name}</span>
      </div>
      <div className="cart-item__amount">
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
      <div className="cart-item__remove">
        <i
          className="fa-solid fa-trash-can cart-item__icon"
          onClick={productCartRemove}
        ></i>
      </div>
    </div>
  );
};

export default CartItem;
