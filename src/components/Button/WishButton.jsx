import { useMutation, useQueryClient } from "react-query";
import { useQuery } from "react-query";

import useData from "../../hooks/useData";

import "./WishButton.scss";

const WishButton = (props) => {
  const userId = localStorage.getItem("userId");

  const { toggleWishlist, getWishlistProduct } = useData();
  const queryClients = useQueryClient();

  const { data } = useQuery({
    queryKey: ["wishlist", props.id],
    queryFn: () => getWishlistProduct(props.id),
  });

  const addToWishlistMutation = useMutation({
    mutationFn: toggleWishlist,
    onSuccess: () => {
      queryClients.invalidateQueries("wishlist");
    },
  });

  const wishlistAddHandler = async () => {
    if (userId) addToWishlistMutation.mutate(props.id);
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
      {data ? (
        <i className="fa-solid fa-heart-circle-minus"></i>
      ) : (
        <i className="fa-solid fa-heart-circle-plus"></i>
      )}
    </button>
  );
};

export default WishButton;
