import ProductItem from "../Products/ProductPreview/ProductItem";
import SectionHeader from "../UI/header/SectionHeader";

import "./Bestsellers.scss";

const Bestselers = (props) => {

  return (
    <section className="bestselers">
      <SectionHeader text={props.title} />
      <div className="bestselers__content">
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

export default Bestselers;
