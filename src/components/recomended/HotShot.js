import { React, useEffect, useCallback, useState } from "react";

import "./HotShot.scss";

const Hotshot = (props) => {
  const [randomProduct, setRandomProduct] = useState(null);

  const rollProduct = useCallback(() => {
    setRandomProduct(props.products[Math.floor(Math.random() * props.products.length)]);
  }, [props.products]);

  useEffect(() => {
    rollProduct();
  }, [rollProduct]);

  return (
    <>
      {randomProduct && (
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
      )}
    </>
  );
};

export default Hotshot;
