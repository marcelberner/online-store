import "./PriceItems.scss";

const PriceItems = (props) => {
  return (
    <>
      {props.cart && (
        <div className={`price-items ${props.hide ? "price-items--hide" : ""}`}>
          {props.cart.map((product, index) => (
            <div className="price-items__item" key={index}>
              <span className="price-items__text">{`${product.amount} x ${product.price} zł`}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PriceItems;
