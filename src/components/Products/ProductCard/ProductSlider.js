import "./ProductSlider.scss";

const ProductSlider = (props) => {
  return (
    <div
      className="product-slider"
      style={{ backgroundImage: `url(.${props.images})` }}
    ></div>
  );
};

export default ProductSlider;
