import { React, useEffect, useCallback, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import useData from "../../hooks/useData";

import Sort from "../../components/Filter/Sort";
import ProductItem from "../../components/Products/ProductPreview/ProductItem";
import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";

import "./ProductList.scss";

const ProductList = () => {
  const requestStatus = useSelector((state) => state.dataRequest.requestStatus);

  const params = useParams();
  const [products, setProducts] = useState();
  const loctaion = useLocation();
  const { dataRequest } = useData();

  const loadProducts = useCallback(async () => {
    const resData = await dataRequest({ method: "GET", database: "products" });

    if (params.productCategory === "search") {
      const queryParams = new URLSearchParams(loctaion.search);
      const searchQuery = queryParams.get("q").toLowerCase();

      const filteredProducts = resData.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery) ||
          product.category.category.toLowerCase().includes(searchQuery) ||
          (product.category.subcategory &&
            product.category.subcategory.toLowerCase().includes(searchQuery))
      );

      setProducts(filteredProducts);
    } else {
      const product = resData.filter(
        (product) =>
          product.category.category === params.productCategory ||
          product.category.subcategory === params.productCategory
      );

      setProducts(product);
    }
  }, [dataRequest, params.productCategory, loctaion.search]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts, dataRequest, requestStatus]);

  return (
    <div className="product-list-page">
      <div className="product-list">
        <Sort />
        {products && products.length > 0 ? (
          <div className="products-container">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
                spec={product.specyfication}
                rep={product.reputation}
                size={"medium"}
              />
            ))}
          </div>
        ) : (
          <NoFoundHeader text={"Nie znaleziono produktu"} />
        )}
      </div>
    </div>
  );
};

export default ProductList;
