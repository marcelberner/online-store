import { Link } from "react-router-dom";

import CartButton from "../../Button/CartButton";
import WishButton from "../../Button/WishButton";

import "./ProductItem.scss";

const ProductItem = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="product">
        <div
          className="product__element product__image"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
        <div className="product__element product__title">{props.name}</div>
        <div className="product__element product__price">{props.price} zł</div>
        <WishButton hide={true} size={"small"}/>
        <CartButton hide={true} size={"small"}/>
      </div>
    </Link>
  );
};

export default ProductItem;
