import { useQuery } from "react-query";

import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";

import ProductCard from "../../components/Products/ProductCard/ProductCard";
import ProductDescription from "../../components/Products/ProductDescription/ProductDescription";
import ProductSpecyfication from "../../components/Products/ProductSpecyfication/ProductSpecyfication";

import "./ProductDetail.scss";
import LoadSpinner from "../../components/UI/LoadSpinner/LoadSpinner";

const ProductDetail = () => {
  const params = useParams();

  const { getProductById } = useData();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: () => getProductById(params.productId),
  });

  return (
    <div className="product-detail-page">
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <>
          <ProductCard
            id={data._id}
            images={data.img}
            name={data.name}
            price={data.price}
            spec={data.specyfication}
            rep={data.reputation}
            recomendation={data.recomendation}
            product={data}
          />
          <ProductDescription description={data.description} product={data} />
          <ProductSpecyfication
            spec={data.specyfication}
            product={data}
            size={"large"}
          />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
