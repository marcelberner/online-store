import ProductItem from "../Products/ProductPreview/ProductItem";

import "./LastWatched.scss";

const LastWatched = (props) => {
  return (
    <section className="last-watched">
      <h2 className="last-watched__header">{props.title}</h2>
      <div className="last-watched__content">
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

export default LastWatched;
