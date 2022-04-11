import React from "react";

import SpecyficationItems from "./SpecyficationItems";

import "./ProductSpecyfication.scss";

const ProductSpecyfication = (props) => {
  return (
    <section className="product-specyfication">
      <h2 className="product-specyfication__header">Specyfikacja</h2>
      <SpecyficationItems spec={props.spec} size={'large'}/>
    </section>
  );
};

export default ProductSpecyfication;
