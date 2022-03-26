import "./ProductItem.scss";

const ProductItem = (props) => {
  return (
    <div className="product">
      <div
        className="product__element product__image"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <div className="product__element product__title">
        {props.name}
      </div>
      <div className="product__element product__price">
        {props.price} zł
      </div>
      <button className="product__button product__button--favourites">
        <i className="fa-solid fa-heart-circle-plus"></i>
      </button>
      <button className="product__button product__button--cartadd">
        <i className="fa-solid fa-cart-arrow-down"></i>
      </button>
    </div>
  );
};

export default ProductItem;
