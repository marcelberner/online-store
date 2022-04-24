import "./SubmitButton.scss";

const SubmitButton = (props) => {
  return (
    <input
      onClick={props.action}
      className={`submit-button ${
        props.size === "small" && "submit-button--small"
      } ${
        props.size === "large" && "submit-button--large"
      }`}
      type="submit"
      value={props.text}
    />
  );
};

export default SubmitButton;
