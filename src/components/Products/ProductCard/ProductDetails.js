import SpecyficationItems from "../ProductSpecyfication/SpecyficationItems";
import Recomendation from "./Recomendation";

import "./ProductDetails.scss";

const ProductDetails = (props) => {
  const productRep = props.rep.split(".");
  const totalRep = [];

  if (parseInt(productRep[0]) >= 1) {
    for (let i = 0; i < parseInt(productRep[0]); i++) {
      totalRep.push({ star: "full" });
    }
  }
  if (parseInt(productRep[1]) >= 5) totalRep.push({ star: "half" });

  return (
    <div className="product-details">
      <h1 className="product-details__name">{props.name}</h1>
      <div className="product-details__info">
        <span className="product-details__reputation">
          {totalRep.map((rep) => {
            if (rep.star === "full")
              return (<i className="fa-solid fa-star product-details__stars" key={Math.random()}></i>);
            else if (rep.star === "half")
              return (<i className="fa-solid fa-star-half product-details__stars" key={Math.random()}></i>);
            else return "";
          })}
          {props.rep}
        </span>
        <span className="product-details__id">ID produktu: {props.id}</span>
      </div>
      <SpecyficationItems spec={props.spec}/>
      {props.recomendation && <Recomendation text={props.recomendation}/>}
    </div>
  );
};

export default ProductDetails;
