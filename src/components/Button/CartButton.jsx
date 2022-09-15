import { useSelector, useDispatch } from "react-redux";

import { cartAdd } from "../../store/userData";
import { changeRequestStatus } from "../../store/dataRequest";

import useData from "../../hooks/useData";

import "./CartButton.scss";

const CartButton = (props) => {
  const isAuth = useSelector((state) => state.userAuth.token);
  const cart = useSelector((state) => state.userData.cart);
  const userData = useSelector((state) => state.userData.userData);

  const dispatch = useDispatch();
  const { dataRequest } = useData();

  const addToCartHandler = async () => {
    if (isAuth) {
      let isAlreadyInCart = false;
      let existingProductId = null;
      let actualAmount = 1;

      if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].productId === props.id) {
            isAlreadyInCart = true;
            existingProductId = cart[i].id;
            actualAmount = cart[i].amount + 1;
            break;
          }
        }
      }
      if (isAlreadyInCart) {
        const increseAmount = await dataRequest({
          method: "PATCH",
          database: `users/${userData.id}/cart/${existingProductId}`,
          body: {
            productId: props.id,
            amount: actualAmount,
            price: props.price,
          },
        });
      } 
      else {
        const addToCart = await dataRequest({
          method: "POST",
          database: `users/${userData.id}/cart`,
          body: {
            productId: props.id,
            amount: actualAmount,
            price: props.price,
          },
        });
      }

      dispatch(changeRequestStatus());
    } else {
      dispatch(cartAdd({ productId: props.id, amount: 1, price: props.price }));
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
