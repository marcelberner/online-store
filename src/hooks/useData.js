import { useState, useCallback } from "react";

const useData = () => {
  const [resData, setResData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dataRequest = useCallback(async (body) => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://online-store-a1383-default-rtdb.europe-west1.firebasedatabase.app/${body.database}.json`,
        {
          method: body.method,
          headers: {"Content-Type": "application/json"},
          body: body.body && JSON.stringify(body.body),
        });

      if (!response.ok) {
        throw new Error(`Błąd: ${body.method === "GET"
              ? "Nie udało się pobrać danych."
              : "Nie udało się wysłać danych."}`);
      }

      const data = await response.json();

      const loadedData = [];
      
      for (const key in data) {
        if (body.database === "products") {
          loadedData.push({
            id: key,
            name: data[key].name,
            img: data[key].img,
            amount: data[key].amount,
            price: data[key].price,
            recomendation: data[key].recomendation,
            reputation: data[key].reputation,
            description: data[key].description,
            specyfication: data[key].specyfication,
            category: data[key].category,
          });
        } 
        else if (body.database === "users") {
          loadedData.push({
            id: key,
            name: data[key].name,
            surname: data[key].surname,
            email: data[key].email,
            phone: data[key].phone,
            userId: data[key].userId,
            admin: data[key].admin,
            address: data[key].address,
            cart: data[key].cart,
            wishlist: data[key].wishlist,
          });
        } 
        else if (body.database === `users/${key}`) {
          loadedData.push({
            id: key,
            productId: data[key].productId,
          });
        }
      }

      setResData(loadedData);
      return loadedData;
    }
    catch (error) {
      console.log(error.message);
      setError(error.messsage);
    }

    setIsLoading(false);
  }, []);

  return { resData, error, dataRequest, isLoading };
};

export default useData;
