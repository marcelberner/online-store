import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";

import ProductCard from "../../components/Products/ProductCard/ProductCard";
import ProductDescription from "../../components/Products/ProductDescription/ProductDescription";
import ProductSpecyfication from "../../components/Products/ProductSpecyfication/ProductSpecyfication";

import "./ProductDetail.scss";
import LoadSpinner from "../../components/UI/LoadSpinner/LoadSpinner";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  const params = useParams();

  const { dataRequest } = useData();

  const getProduct = async () => {
    const reqponse = await dataRequest({ method: "GET", database: `products/${params.productId}` });
    // const product = reqponse.find((product) => product.id === params.productId);

    setProduct(reqponse);
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="product-detail-page">
      {product ? (
        <>
          <ProductCard
            id={product.id}
            images={product.img}
            name={product.name}
            price={product.price}
            spec={product.specyfication}
            rep={product.reputation}
            recomendation={product.recomendation}
            product={product}
          />
          <ProductDescription
            description={product.description}
            product={product}
          />
          <ProductSpecyfication
            spec={product.specyfication}
            product={product}
            size={"large"}
          />
        </>
      ) : (
        <LoadSpinner />
      )}
    </div>
  );
};

export default ProductDetail;
