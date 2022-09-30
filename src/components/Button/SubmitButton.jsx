import "./SubmitButton.scss";

const SubmitButton = (props) => {
  return (
    <input
      onClick={props.action}
      className={`submit-button ${
        props.center ? "submit-button--center" : ""
      } ${props.size === "small" ? "submit-button--small" : ""}${
        props.size === "large" ? "submit-button--large" : ""
      } ${props.size === "medium" ? "submit-button--medium" : ""}`}
      type="submit"
      value={props.text}
    />
  );
};

export default SubmitButton;
