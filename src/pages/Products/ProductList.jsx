import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
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

  const { getProducts } = useData();

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

  const { data, isError, error, isLoading } = useQuery({
    queryKey: [
      "products",
      params.productCategory,
      { search: searchQuery, page: pageQuery, sort: sortQuery },
    ],
    queryFn: () =>
      getProducts(
        `?${
          params.productCategory
            ? "category=" + params.productCategory + "&"
            : ""
        }${searchQuery ? "search=" + searchQuery + "&" : ""}${
          pageQuery ? "page=" + pageQuery + "&" : 1
        }${searchQuery ? "search=" + searchQuery + "&" : ""}${
          sortQuery ? "sort=" + sortQuery + "&" : ""
        }`
      ),
  });

  return (
    <div className="product-list-page">
      <div className="product-list">
        <Sort sortProduct={sortProductsHandler} />
        {isLoading && <LoadSpinner />}
        {!isLoading && data && data.length > 0 && (
          <>
            <div className="products-container">
              {data.map((product, index) => (
                <div className="product-item" key={index}>
                  <ProductItem
                    id={product._id}
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
              productsLength={data.length}
              swapForward={swapForwardHandler}
              swapBackward={swapBackwardHandler}
            />
          </>
        )}
        {!isLoading && data && data.length === 0 && (
          <NoFoundHeader text={"Nie znaleziono produktu"} />
        )}
      </div>
    </div>
  );
};

export default ProductList;
