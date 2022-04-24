import { React,useEffect } from "react";

import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";

import ProductCard from "../../components/Products/ProductCard/ProductCard";
import ProductDescription from "../../components/Products/ProductDescription/ProductDescription";
import ProductSpecyfication from "../../components/Products/ProductSpecyfication/ProductSpecyfication";

import "./ProductDetail.scss";

const ProductDetail = () => {
  const params = useParams();

  const { resData, dataRequest } = useData();

  useEffect(() => {
    dataRequest({ method: "GET", database: "products" });
  },[dataRequest]);
  
  const product = resData && resData.find((product) => product.id === params.productId);

  console.log(product)
  return (
    <>
      {resData && (
        <div className="product-detail-page">
          <ProductCard
            id={product.id}
            images={product.img}
            name={product.name}
            price={product.price}
            spec={product.specyfication}
            rep={product.reputation}
            recomendation={product.recomendation}
          />
          <ProductDescription description={product.description} />
          <ProductSpecyfication spec={product.specyfication} />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
