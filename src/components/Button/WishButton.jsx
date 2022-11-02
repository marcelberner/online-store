import { useSelector, useDispatch } from "react-redux";

import { wishlistAdd, wishlistRemove } from "../../store/userData";

import useData from "../../hooks/useData";

import "./WishButton.scss";

const WishButton = (props) => {
  const userId = useSelector((state) => state.userAuth.userId);
  const wishlist = useSelector((state) => state.userData.wishlist);
  const dispatch = useDispatch();

  const { dataRequest } = useData();

  const wishlistProduct = wishlist.find(
    (product) => product.productId === props.id
  );

  const wishlistAddHandler = async () => {
    if (!wishlistProduct) {
      dispatch(wishlistAdd({ productId: props.id }));
      
      await dataRequest({
        method: "POST",
        database: `users/${userId}/wishlist/add`,
        body: {
          productId: props.id,
        },
      });
    } 
    else {
      dispatch(wishlistRemove({ productId: props.id }));

      await dataRequest({
        method: "POST",
        database: `users/${userId}/wishlist/remove`,
        body: {
          productId: props.id,
        },
      });
    }
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
      {wishlistProduct ? (
        <i className="fa-solid fa-heart-circle-minus"></i>
      ) : (
        <i className="fa-solid fa-heart-circle-plus"></i>
      )}
    </button>
  );
};

export default WishButton;
