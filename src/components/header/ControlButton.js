import "./ControlButton.scss";

const ControlButton = (props) => {
  return <div className="control__button">
      {props.icon}
      <span className="control__button-text">{props.description}</span>
  </div>;
};

export default ControlButton;
