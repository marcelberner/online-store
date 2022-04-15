import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { setLoading, setLoaded } from "../store/loading";

const useProducts = (action) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://online-store-a1383-default-rtdb.europe-west1.firebasedatabase.app/${action.database}.json`,
      {
        method: action.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: action.body && JSON.stringify(action.body),
      }
    ).then((response) => {
      dispatch(setLoading());

      if (response.ok) {
        return response.json().then((data) => {
          const loadedData = [];

          for (const key in data) {
            loadedData.push({
              id: key,
              name: data[key].name,
              img: data[key].img,
              amount: data[key].amount,
              price: data[key].price,
              reputation: data[key].reputation,
              description: data[key].description,
              specyfication: data[key].specyfication,
              category: data[key].category,
            });
          }
          setData(loadedData);
          dispatch(setLoaded());
        });
      } else {
        return response.json().then((data) => setError(data.error.messages));
      }
    });
  }, [action.body,action.database,action.method,dispatch]);

  return { data, error };
};

export default useProducts;
