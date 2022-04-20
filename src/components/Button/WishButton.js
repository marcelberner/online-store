import { React } from "react";
import { useSelector } from "react-redux";

import useData from "../../hooks/useData";

import "./WishButton.scss";

const WishButton = (props) => {
  const userData = useSelector((state) => state.userData.userData);

  const { dataRequest } = useData();

  const addWishlistProduct = (resData) => {
    resData.forEach((product) => {
      if (product.id === props.id) {
        dataRequest({
          method: "POST",
          database: `users/${userData.id}/wishlist`,
          body: {
            productId: product.id,
          },
        });
      }
    });
  };

  const clickHandler = async () => {
    const resData = await dataRequest({ method: "GET", database: "products" });
    addWishlistProduct(resData);
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
