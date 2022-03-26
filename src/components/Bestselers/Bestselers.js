import ProductItem from "../Products/ProductItem";

import "./Bestselers.scss";

const Bestselers = (props) => {
  return <section className="bestselers">
    <h2 className="bestselers__header">{props.title}</h2>
      <div className="bestselers__content">
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

export default Bestselers;