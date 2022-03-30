import PurchaseBar from "./PurchaseBar";
import ProductSlider from "./ProductSlider";
import ProductDetails from "./ProductDetails";

import "./ProductCard.scss";

const ProductCard = (props) => {


  return (
    <section className="product-card">
      <ProductSlider images={props.images} />
      <ProductDetails
        rep={props.rep}
        spec={props.spec}
        name={props.name}
        id={props.id}
        recomendation={props.recomendation}
      />
      <PurchaseBar price={props.price} />
    </section>
  );
};

export default ProductCard;