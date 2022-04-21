import React from "react";

import { Link } from "react-router-dom";

import CartButton from "../../Button/CartButton";
import WishButton from "../../Button/WishButton";
import SpecyficationItems from "../ProductSpecyfication/SpecyficationItems";
import ProductReputation from "../ProductReputation/ProductReputation";

import "./ProductItem.scss";

const ProductItem = (props) => {
  return (
    <div className="product-container">
      <Link to={`/product/${props.id}`}>
        <div className={`product ${props.size === 'medium' && 'product--medium product__element--medium'}`}>
          <div
            className={`product__element product__image ${props.size === 'medium' && 'product__image--medium product__element--medium'}`}
            style={{ backgroundImage: `url(${props.img})` }}
          ></div>
          <div className={`product__element product__title ${props.size === 'medium' && 'product__title--medium product__element--medium'}`}>{props.name}</div>
          {props.size === 'medium' && <ProductReputation rep={props.rep} size={props.size}/>}
          {props.size === 'medium' && <SpecyficationItems spec={props.spec} size={props.size}/>}
          <div className={`product__element product__price ${props.size === 'medium' && 'product__price--medium product__element--medium'}`}>{props.price} zł</div>
        </div>
      </Link>
      <WishButton id={props.id} hide={true} size={props.size}/>
      <CartButton id={props.id} hide={true} size={props.size}/>
    </div>
  );
};

export default ProductItem;
