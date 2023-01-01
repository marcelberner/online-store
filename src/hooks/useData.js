import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

const useData = () => {
  const [resData, setResData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector((state) => state.userAuth.token);

  const dataRequest = useCallback(async (body) => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://online-store-backend.onrender.com/api/${body.database}`,
        {
          method: body.method,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + token
          },
          body: body.body && JSON.stringify(body.body),
        });

      if (!response.ok) {
        throw new Error(`Błąd: ${body.method === "GET"
              ? "Nie udało się pobrać danych."
              : "Nie udało się wysłać danych."}`);
      }

      const data = await response.json();

      const loadedData = Object.values(data)[0];

      setResData(loadedData);
      setIsLoading(false);

      return loadedData;
    }
    catch (error) {
      setError(error.messsage);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { resData, error, dataRequest, isLoading };
};

export default useData;
