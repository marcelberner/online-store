import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setUserData, setWishlist, setCart } from "../store/userData";

import useData from "./useData";

const useInitial = () => {
  const { dataRequest } = useData();
  const userId = useSelector((state) => state.userAuth.token);

  const dispatch = useDispatch();

  const initialDataImport = useCallback(async () => {
    const resData = await dataRequest({ method: "GET", database: "users" });

    resData.forEach((user) => {
      if (user.userId === userId) {
        dispatch(
          setUserData({
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            address: user.address,
            phone: user.phone,
          })
        );

        if (user.wishlist !== "false") {
          const wishlistArray = [];

          for (const key in user.wishlist) {
            wishlistArray.push({
              id: key,
              productId: user.wishlist[key].productId,
            });
          }

          dispatch(setWishlist(wishlistArray));
        }

        if (user.cart !== "false") {
          const cartArray = [];

          for (const key in user.cart) {
            cartArray.push({
              id: key,
              productId: user.cart[key].productId,
              amount: user.cart[key].amount,
              price: user.cart[key].price,
            });
          }

          dispatch(setCart(cartArray));
        }
      }
    });
  }, [dataRequest, dispatch, userId]);

  return initialDataImport;
};

export default useInitial;
