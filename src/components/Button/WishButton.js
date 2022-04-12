import React from "react";
import { useDispatch } from "react-redux";

import PRODUCTS from "../../data/products";

import { add } from "../../store/wishList";

import "./WishButton.scss";

const WishButton = (props) => {
  const dispatch = useDispatch();

  const product = PRODUCTS.find((product) => product.id === props.id);

  const clickHandler = () => {
    dispatch(add(product));
  };

  return (
    <button
      onClick={clickHandler}
      className={`wish-button ${props.hide && "wish-button--hidden"} ${
        props.size === "large" && "wish-button--large"
      } ${props.size === "medium" && "wish-button--medium"} ${
        props.size === "small" && "wish-button--small"
      }`}
    >
      <i className="fa-solid fa-heart-circle-plus"></i>
    </button>
  );
};

export default WishButton;
