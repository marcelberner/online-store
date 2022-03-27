import { useParams } from "react-router-dom";

import PRODUCTS from "../../data/products";

const ProductDetail = () => {
    const params = useParams();

    const product = PRODUCTS.find(product => product.id === params.productId);

    return (
      <div className="page">
          <h1>{product.name}</h1>
      </div>
    );
  };
  
  export default ProductDetail;