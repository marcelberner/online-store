import { useEffect, useCallback, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useData from "../../hooks/useData";

import Sort from "../../components/Filter/Sort";
import SelectPage from "../../components/SelectPage/SelectPage";
import ProductItem from "../../components/Products/ProductPreview/ProductItem";
import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";
import LoadSpinner from "../../components/UI/LoadSpinner/LoadSpinner";

import "./ProductList.scss";

const ProductList = () => {
  const requestStatus = useSelector((state) => state.dataRequest.requestStatus);

  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  const [productsLength, setProductsLength] = useState();
  const loctaion = useLocation();
  const { dataRequest, isLoading } = useData();

  const queryParams = new URLSearchParams(loctaion.search);
  const searchQuery = queryParams.get("q")
    ? queryParams.get("q").toLowerCase()
    : false;
  const pageQuery = queryParams.get("page")
    ? parseInt(queryParams.get("page"))
    : 1;

  const swapForwardHandler = () => {
    navigate(
      `/products/${params.productCategory}?page=${pageQuery + 1}${
        searchQuery ? "&q=" + searchQuery : ""
      }`
    );
  };

  const swapBackwardHandler = () => {
    navigate(
      `/products/${params.productCategory}?page=${pageQuery - 1}${
        searchQuery ? "&q=" + searchQuery : ""
      }`
    );
  };

  const loadProducts = useCallback(async () => {
    const resData = await dataRequest({ method: "GET", database: "products" });

    let products = null;

    if (params.productCategory === "search") {
      products = resData.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery) ||
          product.category.category.toLowerCase().includes(searchQuery) ||
          (product.category.subcategory &&
            product.category.subcategory.toLowerCase().includes(searchQuery))
      );
    } else {
      products = resData.filter(
        (product) =>
          product.category.category === params.productCategory ||
          product.category.subcategory === params.productCategory
      );
    }

    const productSlice = products.slice(
      0 + (pageQuery - 1) * 12,
      pageQuery * 12
    );

    setProductsLength(products.length);
    setProducts(productSlice);
  }, [dataRequest, params.productCategory, pageQuery, searchQuery]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts, dataRequest, requestStatus]);

  return (
    <div className="product-list-page">
      <div className="product-list">
        <Sort />
        {isLoading && <LoadSpinner />}
        {!isLoading && products && products.length > 0 && (
          <>
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
            <SelectPage
              currentPage={pageQuery}
              productsLength={productsLength}
              swapForward={swapForwardHandler}
              swapBackward={swapBackwardHandler}
            />
          </>
        )}
        {!isLoading && products && products.length === 0 && (
          <NoFoundHeader text={"Nie znaleziono produktu"} />
        )}
      </div>
    </div>
  );
};

export default ProductList;
