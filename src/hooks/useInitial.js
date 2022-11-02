import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setUserData, setWishlist, setCart } from "../store/userData";

import useData from "./useData";

const useInitial = () => {
  const { dataRequest } = useData();
  const userId = useSelector((state) => state.userAuth.userId);

  const dispatch = useDispatch();

  const initialDataImport = useCallback(async () => {
    const resData = await dataRequest({
      method: "GET",
      database: `users/${userId}`,
    });

    dispatch(
      setUserData({
        id: resData.id,
        name: resData.name,
        surname: resData.surname,
        email: resData.email,
        address: resData.address,
        phone: resData.phone,
      })
    );

    dispatch(setWishlist(resData.wishlist));
    dispatch(setCart(resData.cart));

  }, [dataRequest, dispatch, userId]);

  return initialDataImport;
};

export default useInitial;
