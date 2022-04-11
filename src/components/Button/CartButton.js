import React from "react";

import "./CartButton.scss";

const CartButton = (props) => {
  return (
    <button
      className={`cart-button ${props.hide && "cart-button--hidden"} ${
        props.size === "large" && "cart-button--large"
      } ${props.size === "medium" && "cart-button--medium"} ${
        props.size === "small" && "cart-button--small"
      }`}
    >
      <i className="fa-solid fa-cart-arrow-down"></i>{props.size === 'large' && <span className="cart-button__text">Dodaj do koszyka</span>}
    </button>
  );
};

export default CartButton;
