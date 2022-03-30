import Article from "./Article";

import "./ProductDescription.scss";

const ProductDescription = (props) => {
  return (
    <section className="description">
      <div className="description__content">
        {props.description.map((article) => (
          <Article
            key={Math.random()}
            title={article.title}
            text={article.text}
            img={article.img}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductDescription;
