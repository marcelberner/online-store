import "./PriceItems.scss";

const PriceItems = (props) => {
  return (
    <div className="price-items">
      {props.cart.map((product, index) => (
        <div className="price-items__item" key={index}>
          <span className="price-items__text">{`${product.amount} x ${product.price} zł`}</span>
        </div>
      ))}
    </div>
  );
};

export default PriceItems;
