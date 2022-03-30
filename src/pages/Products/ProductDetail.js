import { useParams } from "react-router-dom";

import ProductCard from "../../components/Products/ProductCard/ProductCard";
import ProductDescription from "../../components/Products/ProductDescription/ProductDescription";
import ProductSpecyfication from "../../components/Products/ProductSpecyfication/ProductSpecyfication";

import PRODUCTS from "../../data/products";

const ProductDetail = () => {
  const params = useParams();

  const product = PRODUCTS.find((product) => product.id === params.productId);

  return (
    <div className="page">
      <ProductCard
        id={product.id}
        images={product.img}
        name={product.name}
        price={product.price}
        spec={product.specyfication}
        rep={product.reputation}
        recomendation={product.recomendation}
      />
      <ProductDescription description={product.description}/>
      <ProductSpecyfication />
    </div>
  );
};

export default ProductDetail;
