import "./WishButton.scss";

const WishButton = (props) => {
    return (
      <button className={`wish-button ${props.hide && "wish-button--hidden"} ${
        props.size === "large" && "wish-button--large"
      } ${props.size === "medium" && "wish-button--medium"} ${
        props.size === "small" && "wish-button--small"
      }`}>
          <i className="fa-solid fa-heart-circle-plus"></i>
      </button>
    );
  };
  
  export default WishButton;