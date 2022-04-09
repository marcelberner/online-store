import ProductItem from "../Products/ProductPreview/ProductItem";

import "./Bestsellers.scss";

const Bestselers = (props) => {
  const productsArray = [];

  for (let i = 0; i < 12; i++) {
    productsArray.push(props.products[i]);
  }

  return <section className="bestselers">
    <h2 className="bestselers__header">{props.title}</h2>
      <div className="bestselers__content">
        {productsArray.map((product) => (
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
  </section>;
};

export default Bestselers;