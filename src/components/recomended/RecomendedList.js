import PRODUCTS from "../../data/Products";

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
          <div key={Math.random()} className="recomended-list__item">
            <div
              className="recomended-list__element recomended-list__image"
              style={{ backgroundImage: `url(${product.img})` }}
            ></div>
            <div className="recomended-list__element recomended-list__title">
              {product.name}
            </div>
            <div className="recomended-list__element recomended-list__price">
              {product.price} zł
            </div>
            <button className="recomended-list__button recomended-list__button--favourites">
            <i className="fa-solid fa-heart-circle-plus"></i>
            </button>
            <button className="recomended-list__button recomended-list__button--cartadd">
            <i className="fa-solid fa-cart-arrow-down"></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecomendedList;
