import ProductItem from "../Products/ProductPreview/ProductItem";
import SectionHeader from "../UI/header/SectionHeader";

import "./RecomendedList.scss";

const RecomendedList = (props) => {
  return (
    <section className="recomended-list">
      <SectionHeader text={"Polecamy"} />
      <div className="recomended-list__content">
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

export default RecomendedList;
