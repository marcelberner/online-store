import SpecyficationItems from "../ProductSpecyfication/SpecyficationItems";
import Recomendation from "./Recomendation";
import ProductReputation from "../ProductReputation/ProductReputation";

import "./ProductDetails.scss";

const ProductDetails = (props) => {
  return (
    <div className="product-details">
      <h1 className="product-details__name">{props.name}</h1>
      <div className="product-details__info">
        <ProductReputation rep={props.rep}/>
        <span className="product-details__id">ID produktu: {props.id}</span>
      </div>
      <SpecyficationItems spec={props.spec}/>
      {props.recomendation && <Recomendation text={props.recomendation}/>}
    </div>
  );
};

export default ProductDetails;
