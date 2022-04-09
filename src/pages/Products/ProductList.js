import { useParams } from "react-router-dom";

import Filter from "../../components/Filter/Filter";
import Sort from "../../components/Filter/Sort";
import ProductItem from "../../components/Products/ProductPreview/ProductItem";

import PRODUCTS from "../../data/products";

import "./ProductList.scss";

const ProductList = () => {
  const params = useParams();

  const product = PRODUCTS.filter(
    (product) =>
      product.category.category === params.productCategory ||
      product.category.subcategory === params.productCategory
  );

  return (
    <div className="product-list-page">
      <Filter />
      <div className="product-list">
        <Sort />
        <div className="products-container">
          {product.map((product) => (
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
      </div>
    </div>
  );
};

export default ProductList;
