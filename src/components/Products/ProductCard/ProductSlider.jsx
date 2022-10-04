import "./ProductSlider.scss";

const ProductSlider = (props) => {
  return (
    <div
      className="product-slider"
      // style={{ backgroundImage: `url(${props.images})` }}
    >
      <img src={props.images} alt="product img" className="product-slider__img"/>
    </div>
  );
};

export default ProductSlider;
