import { React } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeRequestStatus } from "../../store/dataRequest";

import useData from "../../hooks/useData";

import "./WishButton.scss";

const WishButton = (props) => {
  const wishlist = useSelector((state) => state.userData.wishlist);
  const userData = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch();

  const { dataRequest } = useData();

  let isWishlist = null;
  let productKey = null;

  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i].productId === props.id) {
      isWishlist = true;
      productKey = wishlist[i].id;
      break;
    } else isWishlist = false;
  }

  const wishlistAddHandler = async () => {
    if (isWishlist) {
      const removeRequest = await dataRequest({
        method: "DELETE",
        database: `users/${userData.id}/wishlist/${productKey}`,
        body: {},
      });
    } else {
      const addRequest = await dataRequest({
        method: "POST",
        database: `users/${userData.id}/wishlist`,
        body: {
          productId: props.id,
        },
      });
    }

    dispatch(changeRequestStatus());
  };

  return (
    <button
      onClick={wishlistAddHandler}
      className={`wish-button ${props.hide && "wish-button--hidden"} ${
        props.size === "large" && "wish-button--large"
      } ${props.size === "medium" && "wish-button--medium"} ${
        props.size === "small" && "wish-button--small"
      }`}
    >
      {isWishlist ? (
        <i className="fa-solid fa-heart-circle-minus"></i>
      ) : (
        <i className="fa-solid fa-heart-circle-plus"></i>
      )}
    </button>
  );
};

export default WishButton;
