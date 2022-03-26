import ProductItem from "../Products/ProductItem";

import "./LastWatched.scss";

const LastWatched = (props) => {
  return <section className="last-watched">
    <h2 className="last-watched__header">{props.title}</h2>
      <div className="last-watched__content">
        {props.products.map((product) => (
           <ProductItem
           key={Math.random()}
           img={product.img}
           name={product.name}
           price={product.price}
         />
        ))}
      </div>
  </section>;
};

export default LastWatched;
