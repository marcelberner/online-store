import ProductItem from "../Products/ProductPreview/ProductItem";

import "./Bestsellers.scss";

const Bestselers = (props) => {
  return <section className="bestselers">
    <h2 className="bestselers__header">{props.title}</h2>
      <div className="bestselers__content">
        {props.products.map((product) => (
           <ProductItem
           key={product.id}
           id={product.id}
           img={product.img}
           name={product.name}
           price={product.price}
         />
        ))}
      </div>
  </section>;
};

export default Bestselers;