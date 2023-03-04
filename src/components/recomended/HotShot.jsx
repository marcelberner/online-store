import { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";

import "./HotShot.scss";

const Hotshot = (props) => {
  const [randomProduct, setRandomProduct] = useState(null);

  const rollProduct = useCallback(() => {
    setRandomProduct(props.products[Math.floor(Math.random() * props.products.length)]);
  }, [props.products]);

  useEffect(() => {
    rollProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {randomProduct && (
        <Link to={`/product/${randomProduct._id}`}>
          <div className="hotshot">
            <h2 className="hotshot__element hotshot__header">Gorący strzał</h2>
            <div
              className="hotshot__element hotshot__image"
              style={{ backgroundImage: `url(${randomProduct.img})` }}
            ></div>
            <span className="hotshot__element hotshot__title">
              {randomProduct.name}
            </span>
            <span className="hotshot__element hotshot__price">
              {randomProduct.price} zł
            </span>
            <span className="hotshot__element hotshot__amount">
              Pozostało {randomProduct.amount} sztuk
            </span>
          </div>
        </Link>
      )}
    </>
  );
};

export default Hotshot;
