import { useState } from "react";

import NoFoundHeader from "../../components/UI/Allerts/NoFoundHeader";

import "./OwnProducts.scss";

const OwnProducts = () => {
  const [products] = useState();
  
  return (
    <section className="own-products">
      <div className="own-products__container">
        {products && products.length > 0 ? (
          <div></div>
        ) : (
          <NoFoundHeader text={"Nie posiadasz jeszcze żadnych produktów"}/>
        )}
      </div>
    </section>
  );
};

export default OwnProducts;
