import "./MethodItem.scss";

const MethodItem = (props) => {
  const setMethod = () => {
    props.setNewMethod(props.text);
  };

  return (
    <div
      className={`method-item ${
        props.currentMethod === props.text ? "method-item--current" : ""
      }`}
      onClick={setMethod}
    >
      <span>{props.text}</span>
      <div className="method-item__icon">{props.icon}</div>
    </div>
  );
};

export default MethodItem;
