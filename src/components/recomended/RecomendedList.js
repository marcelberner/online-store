import React from "react";

import ProductItem from "../Products/ProductPreview/ProductItem";

import "./RecomendedList.scss";

const RecomendedList = (props) => {
  return (
    <section className="recomended-list">
      <h2 className="recomended-list__header">Polecamy</h2>
      <div className="recomended-list__content">
        {props.products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
            size={"small"}
          />
        ))}
      </div>
    </section>
  );
};

export default RecomendedList;
