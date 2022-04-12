import "./SubmitButton.scss";

const SubmitButton = (props) => {
  return <input onClick={props.action} className="submit-button" type="submit" value={props.text} />;
};

export default SubmitButton;
