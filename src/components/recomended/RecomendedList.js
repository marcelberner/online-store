import PRODUCTS from "../../data/Products";
import ProductItem from "../Products/ProductItem";

import "./RecomendedList.scss";

const RecomendedList = () => {
  const productsArray = [];

  for (let i = 0; i < 8; i++) {
    productsArray.push(PRODUCTS[i]);
  }

  return (
    <section className="recomended-list">
      <h2 className="recomended-list__header">Polecamy</h2>
      <div className="recomended-list__content">
        {productsArray.map((product) => (
          <ProductItem
            key={Math.random()}
            img={product.img}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default RecomendedList;
