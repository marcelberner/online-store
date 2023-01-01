import { useEffect, useCallback, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import useData from "../../hooks/useData";

import Sort from "../../components/Filter/Sort";
import SelectPage from "../../components/SelectPage/SelectPage";
import ProductItem from "../../components/Products/ProductPreview/ProductItem";
import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";
import LoadSpinner from "../../components/UI/LoadSpinner/LoadSpinner";

import "./ProductList.scss";

const ProductList = () => {
  const params = useParams();
  const loctaion = useLocation();
  const navigate = useNavigate();

  const [products, setProducts] = useState();
  const [productsLength, setProductsLength] = useState();

  const { dataRequest, isLoading } = useData();

  const queryParams = new URLSearchParams(loctaion.search);

  const searchQuery = queryParams.get("q")
    ? queryParams.get("q").toLowerCase()
    : false;
  const pageQuery = queryParams.get("page")
    ? parseInt(queryParams.get("page"))
    : 1;
  const sortQuery = queryParams.get("sort")
    ? queryParams.get("sort").toLowerCase()
    : false;

  const swapForwardHandler = () => {
    navigate(
      `/products/${params.productCategory}?page=${pageQuery + 1}${
        searchQuery ? "&q=" + searchQuery : ""
      }${sortQuery ? "&sort=" + sortQuery : ""}`
    );
  };

  const swapBackwardHandler = () => {
    navigate(
      `/products/${params.productCategory}?page=${pageQuery - 1}${
        searchQuery ? "&q=" + searchQuery : ""
      }${sortQuery ? "&sort=" + sortQuery : ""}`
    );
  };

  const sortProductsHandler = (sortType) => {
    navigate(
      `/products/${params.productCategory}?${
        searchQuery ? "&q=" + searchQuery : ""
      }&sort=${sortType}`
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

    if (sortQuery)
      products = products.sort((a, b) => {
        if (sortQuery === "cena_asc") return a.price - b.price;
        else if (sortQuery === "cena_dsc") return b.price - a.price;
        else if (sortQuery === "ocena_asc") return a.reputation - b.reputation;
        else if (sortQuery === "ocena_dsc") return b.reputation - a.reputation;

        return 0;
      });

    const productSlice = products.slice(
      0 + (pageQuery - 1) * 12,
      pageQuery * 12
    );

    setProductsLength(products.length);
    setProducts(productSlice);
  }, [dataRequest, params.productCategory, pageQuery, searchQuery, sortQuery]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts, dataRequest]);

  return (
    <div className="product-list-page">
      <div className="product-list">
        <Sort sortProduct={sortProductsHandler} />
        {isLoading && <LoadSpinner />}
        {!isLoading && products && products.length > 0 && (
          <>
            <div className="products-container">
              {products.map((product, index) => (
                <div className="product-item" key={index}>
                  <ProductItem
                    id={product.id}
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    spec={product.specyfication}
                    rep={product.reputation}
                    limit={4}
                    size={"medium"}
                  />
                </div>
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
