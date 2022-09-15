import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import useData from "../../hooks/useData";

import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";

import "./OwnProducts.scss";

const OwnProducts = () => {
  const userData = useSelector((state) => state.userData.userData);
  const [products, setProducts] = useState();
  const { dataRequest } = useData();

  const sendRequest = useCallback(async () => {
    const response = await dataRequest({
      method: "GET",
      database: `users/${userData.id}/products`,
    });

    setProducts(response);
  }, [dataRequest, userData]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <section className="own-products">
      <div className="own-products__container">
        {products && products.length > 0 ? (
          <div></div>
        ) : (
          <NoFoundHeader text={"Nie posiadasz jeszcze żadnych produktów"}/>
        )}
      </div>
    </section>
  );
};

export default OwnProducts;
